import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';


class Media extends PureComponent {
  handleClick = (event) => {
    this.props.handleOpenModal(this.props);
  }
  render() {
    
    const { title, cover, author } = this.props;
    return (
      <div className="card small" onClick={this.handleClick}>
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
