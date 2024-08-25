import style from './style.module.scss'

import reactlang from '../../../../../assets/svg/tools/react.svg'
import htmllang from '../../../../../assets/svg/tools/html5.svg'
import vue from '../../../../../assets/svg/tools/vue.svg'
import css from '../../../../../assets/svg/tools/css3.svg'
import angular from '../../../../../assets/svg/tools/angular.svg'


export default function Programming() {
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
            <p>{[...Array(10)].map((v, i) => `${i + 1} `)}</p>
            <div>
                <p>_learned:</p>
                {array.map((v, i) => i < 3 && (<p><img src={v.img} />{v.text}</p>))}
                <p>_in process:</p>
                {array.map((v, i) => i > 2 && (<p><img src={v.img} />{v.text}</p>))}
            </div>

        </div>
    )
}

