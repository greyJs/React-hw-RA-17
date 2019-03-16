'use strict';

function getItem(items) {
    return (
        <li><a href={items.href}>{items.title}</a></li>
    );
}
  
const Menu = function ({ items, opened }) {
    if (opened) {
        return (
        <div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>
            <ul>
                {items.map(getItem)}
            </ul>
            </nav>
        </div>
    );
    }else{
    
    return (
            <div className="menu">
            <div className="menu-toggle"><span></span></div>
            </div>
        );
   };
};
