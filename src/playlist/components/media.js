import React, { Component } from 'react';
import './media.css';

class Media extends Component {
  
  render() {
    const { title, author, image } = this.props;
    return (
      <div className="card Media">
        <div className="card-image waves-effect waves-block waves-light">
          <img class="activator" src={image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{author}</p>
        </div>
      </div>
    )
  }
}



export default Media;
