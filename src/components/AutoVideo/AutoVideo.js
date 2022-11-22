import React from 'react';
import './autovideo.css'
const AutoVideo = () => {
  return (
    <>
      <div className="auto-video">
        <div className="overlay"></div>
        <div className="video-title">
          <h1>Best Luxury Cars For Rent In Dubai</h1>
          <p>Choose your car from our impressive fleet of luxury vehicles.
          Clear deposit policy, straight-forward transaction, no hidden fees, and no hidden costs</p>

        </div>
      <iframe   className='video' src="https://www.youtube.com/embed/cAC1K5MRPP4?autoplay=1&mute=1&loop=1" loop title="ROTANA Star Rent A Car In Dubai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
      
      </div>
    </>
  );
}

export default AutoVideo;
