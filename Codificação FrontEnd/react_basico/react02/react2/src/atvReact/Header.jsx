import style from'./Header.module.css'
import { Link } from 'react-router-dom'

export function Header(props){
    
    return(
        <header className={style.header}>
            <h1>Teste React</h1> <br />

            <ul>
                <li><Link to ='./SectionHome' class="link">Home</Link></li>
                <li><Link to ='./SectionMis' class="link">Missão</Link></li>
                <li><Link to ='./SectionProd' class="link">Produtos</Link></li>
                <li><Link to ='./SectionHistory' class="link">Nossa História</Link></li>
                <li><Link to ='./SectionCont' class="link">Contato</Link></li>
            </ul>
        </header>
    )
}