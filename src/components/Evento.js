function Evento(){

  function myEvent(){
    console.log("Botão clicado!");
  }

  return(
    <>
      <p>Ao clicar abaixo o evento será ativado</p>
      <button onClick={myEvent}>Ativar</button>
    </>
  )
}

export default Evento;