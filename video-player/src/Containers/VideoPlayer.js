import React, { useRef } from "react";
import "../App.css";

import video from "../Assets/Soft Piano Music - Royalty Free - Summit-ZH5B_C8r9Dk.mp4";
import useVideoPlayer from "../Hooks/useVideoPlayer";
import PlayPauseToggle from "../Components/PlayPauseToggle";
import MuteButton from "../Components/MuteButton";
import SpeedButton from "../Components/SpeedButton";
import TheaterModeToggle from "../Components/TheaterModeToggle";
import FullScreenToggle from "../Components/FullScreenToggle";
import ProgressBar from "../Components/ProgressBar";

const VideoPlayer = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    handleVideoVolume,
    toggleMute,
    toggleTheaterMode,
    toggleFullScreen,
  } = useVideoPlayer(videoElement);
  return (
      <div className={`videoWrapper ${playerState.isFullScreen ? "fullScreenOn" : ""} ${playerState.isTheaterMode ? "theaterModeOn" : ""}`}>
        <div className={`controlsContainer ${playerState.isPlaying ? "" : "showOp"}`}>
            <ProgressBar progress = {playerState.progress} onChange = {handleVideoProgress} />

            <div className="buttonsWrapper">
              <PlayPauseToggle isPlaying = {playerState.isPlaying} togglePlay = {togglePlay} />

              <MuteButton volume = {playerState.volume} isMuted = {playerState.isMuted} toggleMute = {toggleMute} handleVideoVolume = {handleVideoVolume} />

              <SpeedButton speed = {playerState.speed} handleVideoSpeed = {handleVideoSpeed} />

              <TheaterModeToggle isFullScreen = {playerState.isFullScreen} isTheaterMode = {playerState.isTheaterMode} toggleTheaterMode = {toggleTheaterMode} />

              <FullScreenToggle isFullScreen = {playerState.isFullScreen} toggleFullScreen = {toggleFullScreen} />
            </div>
          </div>
          <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          />
        </div>
  );
};

export default VideoPlayer;