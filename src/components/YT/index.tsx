import { useRef, useState } from 'react'

import style from './style.module.scss'



export default function YapaneseTrainer() {
    const [answer, setanswer] = useState<number>()
    const random = (x: number) => {
        switch (x) {
            case 10:
                return Math.floor(Math.random() * x)
            case 9:
                return (Math.floor(Math.random() * x) + 1)
            case 4:
                switch (Math.floor(Math.random() * x)) {
                    case 0: return '+'
                    case 1: return '-'
                    case 2: return '*'
                    case 3: return '/'
                }
        }
    }

    const array = [{
        first: random(10),
        sign: random(4),
        second: random(9),
    }]

    console.log(array.map((v) => eval()));
    
    return (
        <div className={style.parent}>
            {array.map((v) => (<><p onChange={e => setanswer(e.target.innerHTML)}>{v.first} {v.sign} {v.second}</p><input /></>))}
        </div>
    )
}