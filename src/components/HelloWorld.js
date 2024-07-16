import Frase from './Frase';

function HelloWorld() {
  return (
    <div>
      <Frase/>
      <h1>Testando meu primeiro componente</h1>
      <p>O componente frase foi importado, foi exibido acima e será exibido abaixo</p>
      <Frase/>
    </div>
  )
}


export default HelloWorld;