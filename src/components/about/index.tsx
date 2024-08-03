import { useEffect, useState } from 'react'
import style from './style.module.scss'

import reactlang from '../../assets/svg/tools/react.svg'
import htmllang from '../../assets/svg/tools/html5.svg'
import vue from '../../assets/svg/tools/vue.svg'
import css from '../../assets/svg/tools/css3.svg'
import angular from '../../assets/svg/tools/angular.svg'

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

export default function About() {
    const [openedlists, setopenedlists] = useState<number[]>([])
    const [infoisopen, setinfoisopen] = useState<boolean>(false)
    const [contactsisopen, setcontactsisopen] = useState<boolean>(false)

    const asidearray = [terminal, magic, controller]

    const infoarray = [
        { title: 'skils', img: redfolder },
        { title: 'interests', img: greenfolder },
        { title: 'education', img: bluefolder }]

    const contactsarray = [{
        img: email,
        title: 'c4erkaoui@gmail.com'
    },
    {
        img: phone,
        title: '+375 (29) 113-23-25'
    }]


    const programming = () => {
        return (
            <>
                <ul>
                    <li><img src={htmllang} alt="" /> HTML5</li>
                    <li><img src={css} alt="" /> CSS3</li>
                    <li><img src={reactlang} alt="" /> React</li>
                </ul>
                <p>in process</p>
                <ul>
                    <li><img src={vue} alt="" /> Vue</li>
                    <li><img src={angular} alt="" /> Angular</li>
                </ul>
            </>
        )
    }

    const contentarray = [
        {
            items: ['programming', 'games', 'anime'],
            contents: [programming(), ]
        }
    ]
    return (
        <div className={style.parent}>
            <aside>
                {asidearray.map((v, i: number) => (<img alt={i.toString()} src={v}></img>))}
            </aside>
            <div>
                <span onClick={() => setinfoisopen(!infoisopen)}><img src={whitearrow} alt=">>" className={infoisopen ? style.rotated : ''} /><p>personal-info</p></span>
                <div className={infoisopen ? style.opened : ''}>
                    {infoarray.map((v, i) => (<>
                        <span onClick={() => openedlists.includes(i) ? (setopenedlists(openedlists.filter(obj => obj != i))) : setopenedlists(openedlists => [...openedlists, i])}>
                            <img src={arrow} alt=">" className={openedlists.includes(i) ? style.rotated : ''} />
                            <img src={v.img} alt={i.toString()} />
                            <p>{v.title}</p>
                        </span>
                        <div className={openedlists.includes(i) ? style.opened : ''}>
                            {}
                            <p>lorem lorem</p>
                        </div></>))}
                </div>
                <span onClick={() => setcontactsisopen(!contactsisopen)}><img src={whitearrow} alt=">>" className={contactsisopen ? style.rotated : ''} /><p>contacts</p></span>
                <div className={contactsisopen ? style.opened : ''}>
                    {contactsarray.map((v, i) => (<span><img src={v.img} alt="" /><a href={i === 0 ? 'mailto:c4erkaoui@gmail.com' : 'tel:+375291132325'}>{v.title}</a></span>))}
                </div>
            </div>
        </div>
    )
}