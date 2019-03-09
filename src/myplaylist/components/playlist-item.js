import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './playlist-item.css';
class PlaylistItem extends PureComponent {

  render () {
    // console.log(this.props.playlist.get('title'))
    const {title, openModal} = this.props;
    return (
      <li className = "playlist-item" onClick={openModal}>
        <a className = "playlist-item-link" href="#">
          { title }
        </a>
      </li>
    )
  }
}

// PlaylistItem.propTypes = {
//   openModal: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired
// }

export default PlaylistItem
