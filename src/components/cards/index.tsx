import { useEffect, useState, useRef } from 'react'
import style from './style.module.scss'
import bolt from '../../assets/svg/bolt.svg'
import cross from '../../assets/svg/cross.svg'
import { Link } from 'react-router-dom'
export default function Cards() {
    const [activeword, setactiveword] = useState<string>('')
    const [rate, setrate] = useState<number>(0)
    const [wordarray, setwordarray] = useState<any>('ABCDEFGHIJKL')
    const [numbers, setnumbers] = useState<any[]>([])
    const [message, setmessage] = useState<string>('select-a-letter')
    const [checkbox, setcheckbox] = useState<boolean>()
    const [timer, settimer] = useState<number>(0)
    const [link, setlink] = useState<string>('')


    useEffect(() => {
        setwordarray(wordarray.repeat(2).split('').sort(() => Math.random() - 0.5))
    }, [])

    useEffect(() => {
        if (rate != 12 && link) {
            const id = setInterval(() => {
                settimer((c: number) => c + 1);
            }, 10);

            return () => clearInterval(id);
        }
    }, [rate, link]);

    const contains = (n: number) => {
        let x = false
        numbers.map((v) => v === n ? x = true : '')
        return x
    }
    useEffect(() => {
        rate === 12 && setmessage('victory!1!1')

    }, [rate])
    return (
        <div className={style.parent}>
            <span className={style.blur}></span>
            <span className={style.blur}></span>
            <div>
                {wordarray.length === 24 && wordarray.map((v: string, i: number) => {

                    return (<div className={style.flip_container} key={i}>

                        <div className={link === './about' && contains(i) ? (style.flipper + ' ' + style.flipped) : (style.flipper + ' ' + style.unflipped)}>
                            <div onClick={() => (
                                setmessage('and-another-one'),
                                setactiveword(v),
                                activeword != '' ? ((v === activeword ? (setrate(rate + 1), setnumbers((v) => [...v, i])) : (numbers.splice(-1),
                                    setmessage('wrong'),
                                    setTimeout(() => {
                                        setmessage('select-a-letter')
                                    }, 1000))), setactiveword('')) : setnumbers((v) => [...v, i])
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
                    <p>// selected-letter : {activeword ? activeword : '?'}</p>
                    <p>// {message}</p>
                    <p>// {Math.floor(timer / 6000)}.{Math.floor(timer / 100) % 60}.{timer % 100}</p>
                </div>
                <div>
                    ////////
                </div>
                <Link to={link}><button onClick={() => setlink('./about')} style={message === 'victory!1!1' || !link ? {
                    opacity: '100%'
                } : { opacity: '0' }}>
                    {rate === 12 ? 'next' : 'start'}
                </button></Link>
            </div>
            {[...Array(4)].map((v, i) => {
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
            })}


        </div>
    )
}

