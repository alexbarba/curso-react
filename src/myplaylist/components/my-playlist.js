import React from 'react'
import PlaylistItemContainer from '../containers/playlist-item-container'

const Playlist = (props) => {
  const { myplaylists, handleOpenModal } = props
  return (
    <ol className = "RelatedPlaylist">
      {
        myplaylists.map( (item) => {
          return <PlaylistItemContainer
                    {...item}
                    key = { item.id }
                    openModal = { handleOpenModal }
                  />
        })
      }
    </ol>
  )
}

export default Playlist
