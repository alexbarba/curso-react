import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class PlaylistFriendItem extends PureComponent {
  render () {
    
      const Playlistfriend = {
        borderColor : "rgba(255, 255, 255, 0.0)",
      };
      const Avatar = {
        minHeight: 60
      };
    return (
      <ul className="collection" style={Playlistfriend}>
        <li className = "collection-item avatar teal transparent" style={Avatar} >
          <img className = "circle" src= { this.props.avatar } alt = "Avatar"/>
          <span className="title">{ this.props.friend }</span>
        </li>
      </ul>
    )
  }
}

PlaylistFriendItem.propTypes = {
  friend: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default PlaylistFriendItem
