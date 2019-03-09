import React, { Component } from 'react';
import PlaylistItem from '../components/playlist-item';


class PlaylistItemContainer extends Component {
  openModal = (event) => {
    this.props.openModal(this.props)
  }
  render () {
    //console.log(this.props, 'props')
    return <PlaylistItem
            openModal = { this.openModal }
            title = { this.props.title }
          />
  }
}

export default PlaylistItemContainer
