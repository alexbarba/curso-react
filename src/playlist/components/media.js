import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  handleClick = (event) => {
    console.log(this.props.image)
  }
  render() {
    const { title, author, image } = this.props;
    return (
      <div className="card Media" onClick={this.handleClick}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{author}</p>
        </div>
      </div>
    )
  }

  
}
// Validando tipado en propiedades
Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}


export default Media;
