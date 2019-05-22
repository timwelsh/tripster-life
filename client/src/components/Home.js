import React from 'react';
import style from '../balloon.css'

export default () => {
  return (
    <div>
      <main>
        <div className='clouds'>
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
        </div>

        <div className='balloon'>
          <a className='btn btn-large' href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank' style={{color:'#fff', fontSize:28, zIndex:10, position:'relative', width:'100%', margin:'0 auto', top:'40%'}}>Add to Chrome</a>
        </div>
        <div className='basket'></div>
        <div className='mountains'>
          <div className='mountain' id='mountain1'></div>
          <div className='mountain' id='mountain2'></div>
          <div className='mountain' id='mountain3'></div>
          <div className='mountain' id='mountain4'></div>
          <div className='mountain' id='mountain5'></div>
          <div className='mountain' id='mountain6'></div>
        </div>
        <div className='land'></div>

      {/* <div
        style={{ 
          backgroundImage:'url(https://live.staticflickr.com/2399/2213593304_9cb6614dc5_o.jpg)',        
          backgroundRepeat:'noRepeat',
          position:'absolute', 
          backgroundSize:'cover',
          marginTop:0, 
          height:'95vh', 
          width:'100vw',
        }} 
      >
      </div>
      <div className='container' style={{position:'absolute', left:'50vw', top:'50vh'}}>
        <a className='waves-effect waves-light btn-large red lighten-1' style={{width:350, height:75, borderRadius:25}} href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank'><i className='material-icons left'>flight_takeoff</i>Add Tripster to Chrome</a>
      </div> */}
      </main>
    </div>
  );
};