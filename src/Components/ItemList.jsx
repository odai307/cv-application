
const ItemList = ({item, accordionClicked}) => {

  return (
    <div className={`item-list ${accordionClicked ? "visible" : "hidden"}`}
    >
      <p>{item}</p>
    </div>
  )
}

export default ItemList;
