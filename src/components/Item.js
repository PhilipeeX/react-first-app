import PropTypes from "prop-types";

function Item({marca, ano_lancamento}) {
  return(
    <>
      <li>{marca} foi lançado no ano de {ano_lancamento}</li>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string,
  ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
  marca: "Marca não definida",
  ano_lancamento: 2000
}

export default Item;