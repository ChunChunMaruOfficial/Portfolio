import { useState } from 'react'
import style from './style.module.scss'

import pfp from '../../assets/img/pfp.png'

import Programming from './folders/skils/programming'
import Gamingandanime from './folders/skils/gamingandanime'

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
    const [openedlists, setopenedlists] = useState<number[]>([])
    const [infoisopen, setinfoisopen] = useState<boolean>(false)
    const [contactsisopen, setcontactsisopen] = useState<boolean>(false)
    const [selectedpages, setselectedpages] = useState<string[]>([])
    const [selectedpage, setselectedpage] = useState<number>(0)

    const codearray = [{
        text: `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T { 
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value; 
}`,
        stars: 3,
        months: 5
    }, {
        text: `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`,
        stars: 0,
        months: 9
    }]

    const asidearray = [terminal, magic, controller]

    const infoarray = [
        { title: 'skils', img: redfolder, content: ['programming', 'games', 'anime'] },
        { title: 'interests', img: greenfolder, content: ['not found'] },
        { title: 'education', img: bluefolder, content: ['not found'] }]

    const contactsarray = [{
        img: email,
        title: 'c4erkaoui@gmail.com'
    },
    {
        img: phone,
        title: '+375 (29) 113-23-25'
    }]

    const codesnippet = [{
        img: details,
        title: 'details'
    },
    {
        img: star,
        title: 'star'
    }]

    const componentrender = () => {
        switch (selectedpage) {
            case 0:
            case 1:
                return <Programming />
            case 2:
                return <Gamingandanime bool={true} />
            case 3:
                return <Gamingandanime bool={false} />
        }
    }
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
                            {v.content?.map((v2, i2) => (<span onClick={() => (selectedpages.includes(v2) ? "" : setselectedpages(selectedpages => [...selectedpages, v2]), setselectedpage(i2 + 1))}><img src={v2 === 'not found' ? notfound : listitem} alt='' /><p>{v2}</p></span>))}
                        </div></>))}
                </div>
                <span onClick={() => setcontactsisopen(!contactsisopen)}><img src={whitearrow} alt=">>" className={contactsisopen ? style.rotated : ''} /><p>contacts</p></span>
                <div className={contactsisopen ? style.opened : ''}>
                    {contactsarray.map((v, i) => (<span><img src={v.img} alt="" /><a href={i === 0 ? 'mailto:c4erkaoui@gmail.com' : 'tel:+375291132325'}>{v.title}</a></span>))}
                </div>
            </div>
            <div>
                <div>
                    {selectedpages.map((v, i) => (<span onClick={() => infoarray[0].content.map((v2, i2) => v2 === v ? setselectedpage(infoarray[0].content.indexOf(v, i2) + 1) : '')}><p>{v}</p><img src={notfound} alt="X" onClick={() => (setselectedpages(openedlists => openedlists.filter(x => x != v)), setselectedpage(0))} /></span>))}
                </div>
                {componentrender()}
            </div>
            <span></span>
            <div>
                <p>// Code snippet showcase:</p>
                {codearray.map((v, i) => (
                    <div>
                        <div>
                            <span>
                                <img src={pfp} alt="" />
                                <span>
                                    <a href="#">@ChunChunMaruOfficial</a>
                                    <p>Created {v.months} months ago</p>
                                </span>
                            </span>
                            <span>
                                {codesnippet.map((v1, i1) => (<span><img src={v1.img} alt="" /><p>{v.stars} {v1.title}s</p></span>))}
                            </span>
                        </div>
                        <div>
                            {v.text}
                        </div>
                    </div>))}
            </div>
        </div>
    )
}