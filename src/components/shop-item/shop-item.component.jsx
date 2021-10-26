import "../shop-item/shop-item.component.styles.scss";

function ShopItem(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-10 shop-item p-2">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="item-footer">
        <span className="product-name">{props.name}</span>
        <span className="product-price"> ${props.price}</span>
      </div>
    </div>
  );
}

export default ShopItem;
