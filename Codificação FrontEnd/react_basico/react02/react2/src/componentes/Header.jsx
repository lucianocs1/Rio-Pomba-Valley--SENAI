import styles from './Header.module.css';
console.log(styles)

export function Header(props) {

    return(

        <header className={styles.header}>
             <strong>Introdução React</strong> 
             
             <p>{props.nomeCliente} <br/>
             {props.cidadeCliente}
             {props.ufCliente}
             
             </p>


        </header>

    )
}