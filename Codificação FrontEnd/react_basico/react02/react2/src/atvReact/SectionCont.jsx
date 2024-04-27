import style from './SectionCont.module.css'

export function SectionCont(props){

    return(
        <section className={style.SectionCont}>
            <h2>{props.titulo}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto nulla porro suscipit ex atque neque quod odit voluptatum obcaecati nemo repellendus quas nam quos, cumque omnis eum deleniti. Accusantium.</p>
        </section>
    )
}