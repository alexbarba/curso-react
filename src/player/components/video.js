import React, { Component } from 'react';
import './video.css'

class Video extends Component{
  togglePlay() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  setRef = element => {
    this.video = element;
  }
  render() {
    const {
      handleLoadedMetadata,
      hangleTimeUpdate,
      
    } = this.props;
    return(
      <div className='Video'>
        <video 
          src={this.props.src}
          autoPlay={this.props.autoplay}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={hangleTimeUpdate}
        />
      </div>
    )
  }
}

export default Video;