import React, { Component } from 'react';
import Media from './media';
import './playlist.css'

class Playlist extends Component{
  render(){
    const { title, description, playlist } = this.props;
    return(
      <div>
        <div>
          <h5>{description}</h5>
          <h3>{title}</h3>
        </div>
        
        <div className='Playlist'>
          {
            playlist.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Playlist;