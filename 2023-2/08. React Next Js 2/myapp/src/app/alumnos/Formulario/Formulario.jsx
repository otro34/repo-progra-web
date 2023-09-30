import styles from './formulario.module.css'

const Formulario = () => {
    return (
        <>
            <label className={styles.label}>ID</label>
            <input type="text"></input>
            <br/>
            <label className={styles.label}>Nombre:</label>
            <input type="text"></input>
            <br/>
            <label className={styles.label}>Apellido:</label>
            <input type="text"></input>
            <br/>
            <label className={styles.label}>Carrera:</label>
            <input type="text"></input>
        </>
    )
}

export default Formulario