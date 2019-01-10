import React from 'react';
import Category from './category'


function Categories(props){
  return(
    <div className='Contenido'>
      {
        props.categories.map((item) => {
          return <Category {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Categories;