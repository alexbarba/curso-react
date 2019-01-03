import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  render() {
    const { title, cover, author } = this.props;
    // const { author } = this.state;
    return (
      <div className="card small">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={cover}/>
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
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}


export default Media;
