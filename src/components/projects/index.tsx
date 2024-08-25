import { useState } from 'react'
import style from './style.module.scss'

import reactlang from '../../assets/svg/simpletools/react.svg'
import htmllang from '../../assets/svg/simpletools/html.svg'
import vue from '../../assets/svg/simpletools/vue.svg'
import css from '../../assets/svg/simpletools/css.svg'
import angular from '../../assets/svg/simpletools/angular.svg'

import Daily_Planner from '../../assets/img/projects/Daily_Planner.png'
import galery from '../../assets/img/projects/galery.png'
import kicks from '../../assets/img/projects/kicks.png'
import portfolio from '../../assets/img/projects/portfolio.png'
import school from '../../assets/img/projects/school.png'

import whiteextendarrow from '../../assets/svg/system/whiteextendarrow.svg'

export default function Projects() {
    const [selectedlanguages, setselectedlanguages] = useState<string[]>([])
    const projects = [
        {
            img: Daily_Planner,
            title: '_Daily-planner',
            text: 'structure, edit and mark your tasks as completed',
            languages: ['HTML5', 'CSS3'],
            link: 'https://github.com/ChunChunMaruOfficial/Simple_site'
        },
        {
            img: galery,
            title: '_Galery',
            text: 'a collection of the best drawings on the planet from the legendary author',
            languages: ['HTML5', 'CSS3', 'React'],
            link: 'https://github.com/ChunChunMaruOfficial/miau'
        },
        {
            img: kicks,
            title: '_Kicks',
            text: 'shoe store. just a shoe store',
            languages: ['HTML5', 'CSS3', 'React'],
            link: 'https://github.com/ChunChunMaruOfficial/Kicks'
        },
        {
            img: portfolio,
            title: '_Portfolio',
            text: 'this is the same page you are on now, just in case',
            languages: ['HTML5', 'CSS3', 'React'],
            link: 'https://github.com/ChunChunMaruOfficial/Portfolio'
        },
        {
            img: school,
            title: '_School-site',
            text: 'a website for school that I made for free',
            languages: ['HTML5', 'CSS3'],
            link: 'https://github.com/ChunChunMaruOfficial/not-a-school-site'
        },
    ]

    let x

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
                {array.map((v, i) => (<span><input title={v.text} type='checkbox' onClick={(e) => (e.target as HTMLInputElement).checked ? setselectedlanguages(a => [...a, v.text]) : setselectedlanguages(a => a.filter(e => e != v.text))}></input><img src={v.img} alt="" /><p>{v.text}</p></span>))}
            </div>
            <div>
                {projects.map((v, i) => {
                    let x = false;
                    v.languages.forEach(language => {
                        if (selectedlanguages.includes(language)) {
                            x = true;
                        }
                    });

                    if (x || selectedlanguages.length == 0) {
                        return (
                            <div key={i}>
                                <p><span>Project {i + 1}</span> // {v.title}</p>
                                <div>
                                    <img src={v.img} alt="" />
                                    <p>{v.text}</p>
                                    <a href={v.link}><button>View Project</button></a>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}


            </div>
        </div>
    )
}

