import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pausa';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-control';
import {formatTime} from '../components/utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';


class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: 1,
    volume: 1,
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
      duration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    });
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleReady = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
    this.setState ({
      volume: this.video.volume
    })
  }

  handleVolumeToggle = () => {
    const lastValue = this.video.volume;
    this.setState ({lastValue})
    if (this.video.volume !== 0) {
      this.video.volume = 0
      this.setState ({
        volume: this.video.volume
      })
    } else {
      this.video.volume = this.state.lastValue
      this.setState ({
        volume: this.video.volume
      })
    }
  }

  render(){
    return(
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
        />
        <VideoPlayerControls >
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formatTime(this.state.duration)}
            currentTime={formatTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
            
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeToggle={this.handleVolumeToggle}
            volume={this.state.volume}
          />
          <FullScreen/>
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause= {this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handleReady={this.handleReady}
          src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;