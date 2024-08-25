import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'


export default function Header() {
    const pages = [{ title: '_hello', link: './' },
    { title: '_about-me', link: './about' },
    { title: '_projects', link: './projects' }]
    const [activepage, setactivepage] = useState(0)
    return (
        <header className={style.parent}>
            <div>
                <p>_adam-sherkaui</p>
                <div>
                    {pages.map((v, i) => (<Link to={v.link}><button key={i} onClick={() => { setactivepage(i) }} className={i === activepage ? style.active : ''}>{v.title}</button></Link>))}
                </div>
            </div>
            <button>_contact-me</button>
        </header>
    )
}

