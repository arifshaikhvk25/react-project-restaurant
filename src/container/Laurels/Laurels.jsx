import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCrard = ({ awardAchived: { imgUrl, title, subtitle } }) => {              // object destructuring
  // const AwardCrard = ( {imgUrl, title, subtitle} ) =>{              
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className='P__cormorant' style={{ color: " #DCCA87" }} > {title} </p>
        <p className='P__cormorant' style={{ color: " white" }} > {subtitle} </p>
      </div>
    </div>
  )
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>

    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {
          data.awards.map((eachawards, index) => {
            return (
              <AwardCrard awardAchived={eachawards} key={index} />          // this is from object desturcturing
              // <AwardCrard  key={index} imgUrl={eachawards.imgUrl} title={eachawards.title}  subtitle={eachawards.subtitle} />        // this form the normal traditional way
            )
          })
        }
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
