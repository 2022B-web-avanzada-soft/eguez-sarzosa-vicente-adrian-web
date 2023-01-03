//components/a_estilos/EstilosEjemplo.tsx
import styles from './estilos.module.css'
// Los estilos deben de tener el nombre "module.css"
export default function (){
    const misEstilos = {
        color: '#FFF',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };
    return (
        <>
            <div style={misEstilos}>Otros estilos</div>
            <div className={styles.rojo}>
                Hola
            </div>
        </>
    )
}