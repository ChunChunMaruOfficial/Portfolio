import { useState } from 'react'
import style from './style.module.scss'


export default function Hello() {
    return (
        <div className={style.parent}>
            <div>
                <p>Hi all. I am</p>
                <p>Sherkaui Adam</p>
                <p>	&#62; Front-end developer</p>
            </div>
            <div>
                <p>// complete the game to continue</p>
                <p>// you can also see it on my Github page</p>
                <p>const <span> githubLink </span> <span>=</span> <a href='https://github.com/ChunChunMaruOfficial'>“https://github.com/ChunChunMaruOfficial”</a></p>
            </div>
        </div>
    )
}

