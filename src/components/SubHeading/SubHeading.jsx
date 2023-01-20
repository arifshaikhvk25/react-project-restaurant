import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{marginBottom: "1rem"}}>
    <p className="P__cormorant" style={{color:"white"}} >{title}</p>    
    <img src={images.spoon} alt="spoon" className='spoon__img' />     {/*{images.spoon} <- it written like this because we have imported all the images so for that we need to write like this images. and what ever image we want */}

  </div>
);

export default SubHeading;
