import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => {

  return (

    <div className='app__specialMenu flex__center section__padding' id='menu'>

      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant"> Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_foods flex__center">
          <p className='app__specialMenu-menu_heading'> Veg & NonVeg</p>

          <div className="app__specialMenu_menu_items">
            {
              data.foods.map((fooditems, index) => {
                return (
                  // <p key={index}> {fooditems.title}  </p>
                  <MenuItem key={fooditems.title + index} title={fooditems.title} price={fooditems.price} tag={fooditems.tags}/>
                )
              })
            }
          </div>

        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu image" />
        </div>

        <div className="app__specialMenu-menu_deserts flex__center">
          <p className='app__specialMenu-menu_heading'> Desert</p>

          <div className="app__specialMenu_menu_items">
            {
              data.deserts.map((desertsitems, index) => {
                return (
                  // <p key={index}> {desertsitems.title}  </p>
                  <MenuItem key={desertsitems.title + index} title={desertsitems.title}  price={desertsitems.price} tag={desertsitems.tags} />
                )
              })
            }
          </div>

        </div>

      </div>

      <div style={{marginTop: "15px"}}>
        <button type='button' className='custom__button'> View More </button>
      </div>

    </div>

  )
};

export default SpecialMenu;
