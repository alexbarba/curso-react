import React, { Component } from 'react';
import Playlist from './playlist';

class Contenido extends Component{
  render(){
    const categorias = this.props.data.categories;
    return(
      <div className='Contenido'>
        {
          categorias.map((item) => {
            return <Playlist {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}

export default Contenido;