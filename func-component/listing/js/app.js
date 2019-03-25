'use strict';
fetch('https://neto-api.herokuapp.com/etsy')
.then(response => response.json())
.then(response => response.map(el => <Listing items = {el} /> ))
.then(response=>{
  ReactDOM.render(<div className = "item-list">{response}</div>,document.getElementById("root"));
});


const Listing = ({items})=>{
const title = items.title.length > 50 ? `${items.title.substr(0, 50)}...`: items.title;

const getValute = () =>{

let valute = null;
switch (items.currency_code){
  case ( "USD"):
  valute = "$";
  break;
  case ( "EUR"):
  valute = "€";
  break;
  default: valute = "GBP";
};
return valute;
};

let className =
items.quantity <= 10
  ? "level-low": items.quantity <= 20
  ? "level-medium": items.quantity > 20
  ? "level-high": null;

return (
    <div className="item"  key = {items.listing_id}>
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{items.title}</p>
        <p className="item-price">{getValute()}{items.price}</p>
        <p className={className}>{items.quantity} left</p>
      </div>
    </div>
  )

};
Listing.defaultProps = {
  items: []
};
