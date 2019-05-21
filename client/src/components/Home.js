import React from 'react';

export default () => {
  return (
    <div>
      <div
        style={{ 
          backgroundImage:'url(https://resources.stuff.co.nz/content/dam/images/1/l/j/k/a/a/image.related.StuffLandscapeSixteenByNine.1240x700.1ljk53.png/1505425522468.jpg)',        
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
        <a className='waves-effect waves-light btn-large red lighten-1' href='https://chrome.google.com/webstore/detail/tripster-life/gpfimpmniemnalhhoomaocokfblbmcjo' target='_blank'><i className='material-icons left'>flight_takeoff</i>Add Tripster to Chrome</a>
      </div>
    </div>
  );
};