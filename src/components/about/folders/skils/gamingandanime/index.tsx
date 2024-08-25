import style from './style.module.scss'

export default function Gaming({ bool }: { bool: boolean }) {

    return (
        <div className={style.parent}>

            <p>{[...Array(16)].map((v, i) => `${i + 1} `)}</p>
            {bool ? (<p>/*I am a true gamer with a wealth of experience and incredible skills. Over the years spent in the world of video games, I have played many popular titles, each of which has left its mark on my gaming career.
                <br /><br />
                My adventures began with classic games like Super Mario Bros. and The Legend of Zelda, which laid the foundation for my passion. Since then, I have gone through many genres: from exciting shooters like Call of Duty and Battlefield to deep role-playing games like The Witcher 3: Wild Hunt and Skyrim.
                <br /><br />
                But most importantly, I get great pleasure from games. They allow me to immerse myself in amazing worlds, meet interesting characters and experience exciting stories.*/</p>) : (

                <p>/*For me, anime is not just a hobby, but a whole world that I immerse myself in. I have been watching anime for many years and during this time I have become familiar with a huge number of works, from classics to new releases.
                    <br /><br />
                    Every anime I watch leaves its mark on my soul. I can spend hours discussing my favorite scenes, characters, and plot twists. My friends often ask me for advice on what anime to watch because they know that I will always recommend something worthwhile.
                    <br /><br />
                    I don’t just watch anime, I deeply immerse myself in Japanese culture. I study traditions, customs, and language.*/</p>)}

        </div>
    )
}

