import React from 'react';
import Home from '../containers/home';

function HomeLayout(props) {
  return(
    <section>
      layout
      {props.children}
    </section>
  ) 
}

export default HomeLayout;