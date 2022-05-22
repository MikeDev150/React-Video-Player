import { useState,useEffect } from "react";

const useVideoPlayer = (videoElement) => {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        volume: 1,
        isMuted: false,
        isTheaterMode: false,
        isFullScreen: false,
      });
    
    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
          ? videoElement.current.play()
          : videoElement.current.pause();
      }, [playerState.isPlaying, videoElement]);useEffect(() => {
        playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);

    const handleOnTimeUpdate = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress,
        });
    };

    const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event) => {
        const speed = Number(event.target.value);
        videoElement.current.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        });
    };

    const handleVideoVolume = (event) => {
        const volume = Number(event.target.value);
        videoElement.current.volume = volume;
        setPlayerState({
            ...playerState,
            volume,
        });
    };

    const toggleMute = () => {
        setPlayerState({
          ...playerState,
          isMuted: !playerState.isMuted,
        });
    };
    
    useEffect(() => {
        playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }, [playerState.isMuted, videoElement]);

    const toggleTheaterMode = () => {
        setPlayerState({
            ...playerState,
            isTheaterMode: !playerState.isTheaterMode,
        })
    };

    const toggleFullScreen = () => {
        setPlayerState({
            ...playerState,
            isFullScreen: !playerState.isFullScreen,
        })
    };

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVideoVolume,
        toggleMute,
        toggleTheaterMode,
        toggleFullScreen,
    };
};

export default useVideoPlayer;