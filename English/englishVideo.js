import React from "react";
import BrushVideo from '../components/BrushTeeth.mp4';

class Video extends React.Component {
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
      this.pauseVideo();
  };


  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };

  render = () => {
    return (
      <div>
          <h1 className = "pageTitle"> Brushing Technique Video</h1>
        <video
          ref="vidRef"
          src= {BrushVideo}
          type="video/mp4"
        />

        <div>
          <button onClick={this.playVideo}>
            Play
          </button>
          <button onClick={this.pauseVideo}>
            Pause
          </button>
        </div>
      </div>
    );
  };
}

export default Video;