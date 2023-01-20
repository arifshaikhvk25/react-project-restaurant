import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tag }) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">

      <div className="app__menuitem-name">
        <p className="P__cormorant" style={{color:"#DCCA87"}} > {title} </p>
      </div>

      <div className='app__menuitem-dash'/>

      <div className="app__menuitem-price">
        <p className="P__cormorant" style={{color:"white"}}> {price} </p>
      </div>

    </div>
    
      <div className="app__menuitem-sub">
        <p className='P__opensans' style={{color: "#AAA"}}> {tag} </p>
      </div>
  </div>
);

export default MenuItem;
