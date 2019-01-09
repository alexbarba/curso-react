import React, { Component } from 'react';
import Playlist from './playlist';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';


class Contenido extends Component{
  render(){
    const categorias = this.props.data.categories;
    return(
      <div className='Contenido'>
        <Play
          size={50}
          color="red"
            />
        <Pause
          size={50}
          color="blue"
          />
        <FullScreen
          size={50}
          color="purple"
          />
        <Volume
          size={50}
          color="brown"
          />

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