import { useEffect, useState, useRef } from 'react'
import style from './style.module.scss'
import bolt from '../../assets/svg/bolt.svg'
import cross from '../../assets/svg/cross.svg'
import { Link } from 'react-router-dom'
export default function Cards() {
    const [letters, setletters] = useState<string[]>('ABCDEFGHIJKL'.split(''))
    const [activeword, setactiveword] = useState<string>('')
    const [rate, setrate] = useState<number>(0)
    const [wordarray, setwordarray] = useState<string[]>(letters)
    const [numbers, setnumbers] = useState<number[]>([])
    const [message, setmessage] = useState<string>('select-a-letter')
    const [checkbox, setcheckbox] = useState<boolean>()
    const [timer, settimer] = useState<number>(0)
    const [link, setlink] = useState<string>('')
    const [pause, setpause] = useState<boolean>(false)
    const [complexity, setcomplexity] = useState<number>(1)
    const [attempts, setattempts] = useState<number>(0)

    const complexityarray = [{ text: 'easy', array: 'ABCDEF' },
    { text: 'medium', array: 'ABCDEFGHIJKL' },
    { text: 'hard', array: 'ABCDEFGHIJKLMNOPQR' }]

    /* запрет на копирование текста */

    document.ondragstart = noselect;
    document.onselectstart = noselect;
    document.oncontextmenu = noselect;
    function noselect() { return false; }

    /* =========================== */

    useEffect(() => {
        if (rate == 0) {

            setletters(complexityarray[complexity].array.split(''))
            setwordarray(complexityarray[complexity].array.split('').concat(complexityarray[complexity].array.split('')).sort(() => Math.random() - 0.5))
        }
    }, [complexity, rate])

    useEffect(() => {
        !link && settimer(0)
        if (!pause && rate < letters.length && link) {
            const id = setInterval(() => {
                settimer((c: number) => c + 1);
            }, 10);
            return () => clearInterval(id);
        }
    }, [rate, link, pause]);

    useEffect(() => {        
        rate == letters.length && (setmessage('victory!1!1'), setlink('./about'), setpause(true))
    }, [rate,letters])
    return (
        <div className={style.parent + ' ' + (complexity == 2 ? style.bigger : complexity == 0 ? style.smaller : '')}>
            <span className={style.blur}></span>
            <span className={style.blur}></span>
            <div>
                {wordarray.length >= 12 && wordarray.map((v: string, i: number) => {

                    return (<div className={style.flip_container + ' ' + (complexity == 0 ? style.bigsize : style.normalsize)} key={i}>

                        <div className={numbers.includes(i) ? (style.flipper + ' ' + style.flipped) : (style.flipper + ' ' + style.unflipped)}>
                            <div onClick={() => timer > 0 && (
                                setmessage('and-another-one'),
                                setactiveword(v),
                                setnumbers((v) => [...v, i]),
                                activeword != '' ? ((v === activeword ? (setrate(rate + 1), setactiveword(''), setmessage('select-a-letter'), setletters(l => l.map(v1 => v1 === v ? v1 = '✔' : v1))) : (
                                    setmessage('wrong'),
                                    setTimeout(() => {
                                        setnumbers(prevnumbers => prevnumbers.slice(0, -2))
                                        setmessage('select-a-letter')
                                        setactiveword('')
                                    }, 500))), setattempts(at => at + 1)) : ''
                            )} className={style.front}>
                                {checkbox && (<p>{v}</p>)}
                            </div>
                            <div className={style.back}>
                                <p>{v}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            <div>
                <span>_dev-mode<input type="checkbox" role="switch" aria-label='switch' checked={checkbox} onChange={(e) => setcheckbox(e.target.checked)} className={style.toggle} /></span>
                <div>
                    <p>// rate : {rate}</p>
                    <p>// attempts : {attempts}</p>
                    <p>// selected-letter : {activeword ? activeword : '?'}</p>
                    <p>// {message}</p>
                    <p>// {Math.floor(timer / 6000)}.{Math.floor(timer / 100) % 60}.{timer % 100}</p>
                </div>
                <div>
                    {letters.map((v) => (<p>{v}</p>))}
                </div>
                <span>

                    {timer === 0 && (<button onClick={() => { complexity == 2 ? setcomplexity(0) : setcomplexity(complexity + 1) }}>{complexityarray[complexity].text}</button>)}
                </span>
                <span>
                    <button onClick={(e) => {
                        (e.target as HTMLButtonElement).innerText === 'start' ? setlink('./') : (
                            setpause(false),
                            setlink(''),
                            setletters(complexityarray[complexity].array.split('')), //можно доработать потом
                            setnumbers([]),
                            setmessage('select-a-letter'),
                            setrate(0),
                            setattempts(0)
                        )
                    }}>
                        {timer === 0 ? 'start' : 'restart'}
                    </button>
                    <Link style={{ display: link ? 'block' : 'none' }} to={link}>  <button onClick={() => setpause(link != './about' && pause ? false : true)} >
                        {rate === letters.length ? 'next' : (pause ? 'resume' : 'pause')}
                    </button></Link>
                </span>
            </div>
            {
                [...Array(4)].map((v, i) => {
                    let x = '12px'
                    let y = '12px'
                    switch (i) {
                        case 1:
                            x = '484px'
                            break;
                        case 2:
                            y = complexity == 2 ? '652px' : '449px'
                            break;
                        case 3:
                            y = complexity == 2 ? '652px' : '449px'
                            x = '484px'
                            break;
                    } return (<span
                        style={{
                            position: 'absolute',
                            top: y,
                            left: x
                        }

                        }>
                        <img src={bolt} alt="" />
                        <img src={cross} alt="" />
                    </span>)
                })
            }


        </div >
    )
}

