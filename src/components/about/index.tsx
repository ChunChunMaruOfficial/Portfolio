import { useState } from 'react'
import style from './style.module.scss'

import pfp from '../../assets/img/pfp.png'

import terminal from '../../assets/svg/icons/terminal.svg'
import magic from '../../assets/svg/icons/magic.svg'
import controller from '../../assets/svg/icons/controller.svg'

import redfolder from '../../assets/svg/folders/redfolder.svg'
import greenfolder from '../../assets/svg/folders/greenfolder.svg'
import bluefolder from '../../assets/svg/folders/bluefolder.svg'

import arrow from '../../assets/svg/system/extendarrow.svg'
import whitearrow from '../../assets/svg/system/whiteextendarrow.svg'

import email from '../../assets/svg/contacts/email.svg'
import phone from '../../assets/svg/contacts/phone.svg'

import listitem from '../../assets/svg/listitem.svg'
import notfound from '../../assets/svg/system/error.svg'

import details from '../../assets/svg/codesnippet/details.svg'
import star from '../../assets/svg/codesnippet/star.svg'



export default function About() {
    const contextmenu = ['personal-info', 'contacts']
    const asidemenu = [terminal, magic, controller]
    return (
        <div className={style.wrapper}>
            <aside>
                {asidemenu.map((v, i) => (<img alt={i.toString()} src={v} />))}
            </aside>
            <div className={style.main}>
                {contextmenu.map(v => (<span><img src={whitearrow} alt=">" /><p>{v}</p></span>))}
            </div>

            <div className={style.separator}><div></div></div>
            <div className={style.showcase}></div>
            <div className={style.separator}><div></div></div>
        </div>

    )
}