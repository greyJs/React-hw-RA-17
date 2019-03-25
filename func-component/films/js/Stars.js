'use strict';
const Stars = ({count})=>{
let rating ;
if((count < 1) ||( count > 5) || (count === NaN)){
    rating = null;
  }else {
    rating = count;
  };
  return (

<ul className="card-body-stars u-clearfix">
    {
    new Array(rating).fill(<li><Star/></li>)
    }
</ul>
);
}
Stars.defaultProps = {
  count: 0
};
ReactDOM.render(
  <Stars  count={1} />,
  document.getElementById('root'));
