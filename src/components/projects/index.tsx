import { useState } from 'react'
import style from './style.module.scss'

import reactlang from '../../assets/svg/simpletools/react.svg'
import htmllang from '../../assets/svg/simpletools/html.svg'
import vue from '../../assets/svg/simpletools/vue.svg'
import css from '../../assets/svg/simpletools/css.svg'
import angular from '../../assets/svg/simpletools/angular.svg'

import whiteextendarrow from '../../assets/svg/system/whiteextendarrow.svg'

export default function Projects() {
    const array = [
        {
            img: htmllang, text: 'HTML5'
        },
        {
            img: css, text: 'CSS3'
        },
        {
            img: reactlang, text: 'React'
        },
        {
            img: vue, text: 'Vue'
        },
        {
            img: angular, text: 'Angular'
        }
    ]
    return (
        <div className={style.parent}>
            <div>
                <span><img src={whiteextendarrow} alt="\/" /><p>projects</p></span>
                {array.map((v, i) => (<span><input title={v.text} type='checkbox'></input><img src={v.img} alt="" /><p>{v.text}</p></span>))}
            </div>
        </div>
    )
}

