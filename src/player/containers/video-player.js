import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pausa';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-control';
import {formatTime} from '../components/utilities';

class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: '00:00',
    currentTime: '00:00',
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: formatTime(this.video.duration)
    });
  }
  hangleTimeUpdate = event => {
    this.video = event.target;
    this.setState({
      currentTime: formatTime(this.video.currentTime)
    });
  }
  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
        />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
        </VideoPlayerControls>
        
        <Video
          autoplay={this.props.autoplay}
          pause= {this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          hangleTimeUpdate={this.hangleTimeUpdate}
          src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;