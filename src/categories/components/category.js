import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props){
  return(
    <div>
      <div>
        <h5>{props.description}</h5>
        <h3>{props.title}</h3>
      </div>
      
      <div>
        <Playlist className='Category'
          playlist={props.playlist}
        />
      </div>
    </div>
  )
}

export default Category;