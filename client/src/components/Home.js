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

        <a href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank'>
          <div className='balloon'>
            <a className='btn btn-large' href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank' style={{color:'#fff', fontSize:28, zIndex:10, position:'relative', width:'100%', margin:'0 auto', top:'40%', borderRadius:'20%'}}>Add to Chrome</a>
          </div>
        </a>

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
      </main>
    </div>
  );
};