
const ItemList = ({item, accordionClicked, handleListDataClick}) => {

  return (
    <div className={`item-list ${accordionClicked ? "visible" : "hidden"}`}
        onClick={handleListDataClick}
    >
      <p>{item}</p>
    </div>
  )
}

export default ItemList;
