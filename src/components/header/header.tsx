import { useState } from 'react'
import style from './header.module.scss'


export default function Header() {
    const pages = ['_hello', '_about-mev', '_projects']
    const [activepage, setactivepage] = useState(0)
    return (
        <div className={style.parent}>
            <div>
                <p>_adam-sherkaui</p>
                <div>
                    {pages.map((v, i) => (<button onClick={() => { setactivepage(i) }} className={i === activepage ? style.active : ''}>{v}</button>))}
                </div>
            </div>
            <button>_contact-me</button>
        </div>
    )
}

