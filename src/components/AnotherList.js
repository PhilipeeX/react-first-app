function AnotherList({itens}) {
  return(
    <>
      {itens.length > 0 ?
        itens.map((item, index) => (
          <p key={index}>{item}</p>
        )) : "Não há itens a serem exibidos :/"
      }
    </>
  )
}

export default AnotherList;