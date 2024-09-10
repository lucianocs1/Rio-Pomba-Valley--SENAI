import style from './SectionHistory.module.css'

export function SectionHistory(props){

    return(
        <section className={style.SectionHistory}>
            <h1>{props.titulo}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam dicta ab repudiandae architecto debitis quae natus dignissimos illo, recusandae illum atque sequi quos nulla. Nemo assumenda ad quas voluptatem.</p>
        </section>
    )
}