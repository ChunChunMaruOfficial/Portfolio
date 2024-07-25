import { useState } from 'react'
import style from './hello.module.scss'


export default function Hello() {
    return (
        <div className={style.parent}>
<p>Hi all. I am</p>
<p>Micheal Weaver</p>
<p> Front-end developer</p>
        </div>
    )
}

