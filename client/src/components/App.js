import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
  return (
    <div className="light-blue lighten-4" style={{height:"100vh"}}>
      <Header />

      {/* <div className="container"> */}
      { props.children }
      {/* </div> */}

      <Footer />
    </div>
  );
};