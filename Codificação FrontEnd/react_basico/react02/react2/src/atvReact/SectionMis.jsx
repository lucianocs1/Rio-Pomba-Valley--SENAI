import style from './SectionMis.module.css'

export function SectionMis(props){

    return(
        <section className={style.SectionMis}>
            <h1>{props.titulo}</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus amet fuga adipisci expedita sunt asperiores. Nesciunt esse maxime eos cupiditate ipsam molestias neque laborum suscipit, temporibus nihil, ipsum officiis dolorem.</p>
        </section>
    )
}