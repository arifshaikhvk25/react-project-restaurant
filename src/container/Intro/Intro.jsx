import React, { useRef, useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();

  const handelVideo = () => {
    // setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    // if(playVideo){
    //   vidRef.current.pause();
    // }else{
    //   vidRef.current.play();
    // }

    if (playVideo) {
      setPlayVideo(false)
      vidRef.current.pause();
    } else {
      setPlayVideo(true)
      vidRef.current.play();
    }

  }


  return (
    <div className='app__video'>

      <video
        src={meal}
        ref={vidRef}
        typeof='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">

        <div className="app__video-overlay_circle flex__center" onClick={handelVideo}>
          {
            playVideo ? <BsPauseFill color='white' fontSize={50} /> : <BsFillPlayFill color='white' fontSize={50} />
          }
        </div>
      </div>

    </div>

  )
};


export default Intro;
