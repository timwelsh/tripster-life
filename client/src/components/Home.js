import React from 'react';

export default () => {
  return (
    <div>
      <div
        style={{ 
          backgroundImage:'url(https://live.staticflickr.com/2399/2213593304_9cb6614dc5_o.jpg)',        
          backgroundRepeat:'noRepeat',
          position:'absolute', 
          backgroundSize:'cover',
          marginTop:0, 
          height:'100%', 
          width:'100%',
          overflow:'hidden',
          opacity:'0.65',
        }} 
      >
      </div>
      <div className='container' style={{position:'absolute', left:'50vw', top:'50vh'}}>
        <a className='waves-effect waves-light btn-large red lighten-1' style={{width:350, height:75, borderRadius:25}} href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank'><i className='material-icons left'>flight_takeoff</i>Add Tripster to Chrome</a>
      </div>
    </div>
  );
};