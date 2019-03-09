import React from 'react';
import './related.css';
import MyPlaylistContainer from '../../myplaylist/containers/my-playlist';
import PlaylistFriendsContainer from '../../playlist-friends/containers/playlists-friends-container';
import MenuContainer from '../../related-menu/containers/menu-container';

function Related(props) {
  return (
    <div className="Related">
      <img 
        src='./images/logo.png'
        width={250}
      />

      <MyPlaylistContainer
          myplaylists = { props.myplaylists }
          handleOpenModal = { props.handleOpenModal }
      />
      <PlaylistFriendsContainer friends = { props.friends } />
      <MenuContainer />
    </div>
  )
}

export default Related;
