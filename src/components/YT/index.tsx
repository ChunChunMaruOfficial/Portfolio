import { useRef, useState } from 'react'

import style from './style.module.scss'



export default function YapaneseTrainer() {
    const [ex, setex] = useState<number>(1)

function Render() {
    return(
      <div className={style.wrapper}>  <p>{random(10)} {random(4)} {random(9)}</p> <input title='3eE' type="text" /> </div>
    )
}

    function random(x: number) {
        switch (x) {
            case 10 :
                return Math.floor(Math.random() * x)
            case 9 :
                return (Math.floor(Math.random() * x) + 1)
            case 4 :
                switch (Math.floor(Math.random() * x)) {
                    case 0: return '+'
                    case 1: return '-'
                    case 2: return '*'
                    case 3: return '/'
                }
        }
    }


    return (
        <div className={style.parent}>
          {[...Array(ex)].map(() => Render())}
          <button onClick={() => setex(x => x + 1)}>rwr</button>
        </div>
    )
}