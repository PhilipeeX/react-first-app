import Item from './Item'

function List() {
  return(
    <>
      <ul>
        <Item marca="Volvo" ano_lancamento={1987}/>
        <Item marca="Honda"/>
        <Item ano_lancamento={1998}/>
      </ul>
    </>
  )
}

export default List;