
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import twitt from '../../assets/twitt.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="https://www.facebook.com/" target='__blank'>  <img src={face} alt="Facebook" />  </a>
                    <a href="https://x.com/" target='__blank'>  <img src={twitt} alt="Twitter" />  </a>
                    <a href="https://www.youtube.com/" target='__blank'>  <img src={youtube} alt="YouTube" /> </a>
                    <a href="www.linkedin.com/in/vitoriagomes4" target='__blank'>  <img src={linkedin} alt="LinkedIn" />  </a>
                    <a href="https://www.instagram.com/vittech4.0/" target='__blank'>  <img src={insta} alt="Instagram" />  </a>
                </nav>
            </section>
            <section className={S.boxTexto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}