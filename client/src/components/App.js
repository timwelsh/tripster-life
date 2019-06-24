import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
  return (
    <div className='white' style={{height:'100vh'}}>
      <Header />

      {/* <div className='container'> */}
      { props.children }
      {/* </div> */}

      <Footer />
    </div>
  );
};