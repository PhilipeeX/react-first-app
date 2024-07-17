import styles from "./Frase.module.css"

function frase() {
  return (
    <div className={styles.frase_container}>
      <p>Este é um componente que contem uma frase!</p>
    </div>
  )
}

export default frase;