import style from './SectionHome.module.css'
import { Link } from 'react-router-dom'

export function SectionHome(props){

    return(
        <section className={style.SectionHome}>
            <h1>{props.titulo}</h1>
            <p>Lorem I ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi nihil esse veniam earum, sint nobis libero temporibus? Illum dignissimos dolor ab assumenda eius saepe, atque deleniti mollitia dolores sed.</p>
        </section>
    )
}