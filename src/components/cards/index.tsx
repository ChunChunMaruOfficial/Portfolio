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
    const [attempts, setattempts] = useState<number>(0)

    const complexityarray = [{ text: 'easy', array: 'ABCDEFG' },
    { text: 'medium', array: 'ABCDEFGHIJKL' },
    { text: 'hard', array: 'ABCDEFGHIJKLMNOPQR' }]

    console.log(letters, wordarray)
    

    useEffect(() => {
        setwordarray(letters.concat(letters).sort(() => Math.random() - 0.5))
    }, [letters])

    useEffect(() => {
        !link && settimer(0)
        if (!pause && rate < 12 && link) {
            const id = setInterval(() => {
                settimer((c: number) => c + 1);
            }, 10);
            return () => clearInterval(id);
        }
    }, [rate, link, pause]);

    useEffect(() => {
        rate === 12 && (setmessage('victory!1!1'), setlink('./about'))

    }, [rate])
    return (
        <div className={style.parent}>
            <span className={style.blur}></span>
            <span className={style.blur}></span>
            <div>
                {wordarray.length >= 14 && wordarray.map((v: string, i: number) => {

                    return (<div className={style.flip_container} key={i}>

                        <div className={numbers.includes(i) ? (style.flipper + ' ' + style.flipped) : (style.flipper + ' ' + style.unflipped)}>
                            <div onClick={() => timer > 0 && (
                                setmessage('and-another-one'),
                                setactiveword(v),
                                setnumbers((v) => [...v, i]),
                                activeword != '' ? ((v === activeword ? (setrate(rate + 1), setmessage('select-a-letter'), setletters(l => l.map(v1 => v1 === v ? v1 = v1.toLowerCase() : v1))) : (
                                    setmessage('wrong'),
                                    setTimeout(() => {
                                        setnumbers(prevnumbers => prevnumbers.slice(0, -2))
                                        setmessage('select-a-letter')
                                    }, 500))), setactiveword(''), setattempts(at => at + 1)) : ''
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
                <span>{complexityarray.map((v) => (<button onClick={(() => setletters(v.array.split('')))}>{v.text}</button>))}</span>
                <span>
                    <button onClick={(e) => {
                        (e.target as HTMLButtonElement).innerText === 'start' ? setlink('./') : (
                            setlink(''),
                            setletters('ABCDEFGHIJKL'.split('')), //можно доработать потом
                            setnumbers([]),
                            setmessage('select-a-letter'),
                            setrate(0),
                            setattempts(0)
                        )
                    }}>
                        {timer === 0 ? 'start' : 'restart'}
                    </button>
                    <Link to={link}>  <button onClick={() => setpause(link != './about' && pause ? false : true)} style={{ opacity: link ? '100%' : '0' }}>
                        {rate === 12 ? 'next' : (pause ? 'resume' : 'pause')}
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
                            y = '449px'
                            break;
                        case 3:
                            y = '449px'
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

