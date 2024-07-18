import Button from './evento/Button'

function Evento(){

  function myEvent(){
    console.log("Botão clicado");
  }

  function mySecondEvent(){
    console.log("Segundo botão clicado");
  }

  return(
    <>
      <p>Ao clicar abaixo o evento será ativado</p>
      <Button func={myEvent} text="Ativar botão evento 1"/>
      <Button func={mySecondEvent} text="Ativar botão evento 2"/>
    </>
  )
}

export default Evento;