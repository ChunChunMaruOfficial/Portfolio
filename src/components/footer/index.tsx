import style from './style.module.scss'
import git from '../../assets/svg/social/git.svg'
import facebook from '../../assets/svg/social/facebook.svg'
import twitter from '../../assets/svg/social/twitter.svg'

export default function Footer() {


    return (
        <footer className={style.parent}>
            <div>
                <p>find me in:</p>
                <a href="#"> <img src={twitter} alt="tw" /></a>
                <a href="#">  <img src={facebook} alt="fb" /></a>
            </div>
            <a href="#">   <div>
                <p>@ChunChunMaruOfficial</p>
                <img src={git} alt="" />
            </div></a>
        </footer>
    )
}

