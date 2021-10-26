import ShopItem from "../shop-item/shop-item.component";
import "../shop-collection/shop-collection.styles.scss";

function ShopCollection(props) {
  console.log(props.items);
  return (
    <div className="row flex-column shop-collection  m-auto">
      <h4 className="collection-title">{props.title}</h4>
      <div className="row">
        {props.items
          .filter((item, idx) => {
            return idx < 4;
          })
          .map((item) => {
            return (
              <ShopItem
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              ></ShopItem>
            );
          })}
      </div>
    </div>
  );
}
export default ShopCollection;