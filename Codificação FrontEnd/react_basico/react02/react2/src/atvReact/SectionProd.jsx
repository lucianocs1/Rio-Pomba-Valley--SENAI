import style from './SectionProd.module.css'

export function SectionProd(props){

    return(
        <section className={style.sectionProd}>
            <h1>{props.titulo}d</h1>
            <p>Lorem V ipsum dolor, sit amet consectetur adipisicing elit. Tempore asperiores nostrum, incidunt, explicabo unde reiciendis inventore sunt molestias impedit sequi consequuntur consequatur quod neque magnam, quas adipisci quos praesentium fugit.</p>
        </section>
    )
}