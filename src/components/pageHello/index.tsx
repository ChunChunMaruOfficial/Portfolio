import { useState } from 'react'
import style from './style.module.scss'
import Hello from '../hello'
import Cards from '../cards'

export default function PageHello() {
    return (
        <div className={style.parent}>
            <Hello />
            <Cards/>
        </div>
    )
}

