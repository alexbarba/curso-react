import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  state = {
    author: 'Alexis Barba'
  }
  handleClick = (event) => {
    this.setState({
      author: 'Emmanuel Alonso'
    })
  }
  render() {
    const { title, image } = this.props;
    const { author } = this.state;
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
