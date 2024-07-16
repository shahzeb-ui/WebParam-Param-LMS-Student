"use client";

import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/styles/video/youtubevideo.module.css";
import { useVideo } from "@/context/video-context/video-context";

const getVideoId = (url: string): string | null => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const YoutubePlayerComponent: React.FC = () => {
  const { selectedVideoUrl } = useVideo();
  const videoId = selectedVideoUrl ? getVideoId(selectedVideoUrl) : "";
  const playerRef = useRef<any>(null);
  const [player, setPlayer] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(100);

  const handlePlayerReady = (event: any) => {
    setPlayer(event.target);
    setDuration(event.target.getDuration());
  };

  const handlePlayPause = () => {
    if (player?.getPlayerState() === 1) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!player) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    player.seekTo(newTime);
  };

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.requestFullscreen();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    player.setVolume(newVolume);
  };

  const updateProgress = () => {
    if (player) {
      const currentTime = player.getCurrentTime();
      const duration = player.getDuration();
      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [player]);

  return (
    <div className={styles.videoContainer} ref={playerRef}>
      {videoId ? (
        <>
          <YouTube
            videoId={videoId}
            opts={{
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                controls: 0,
                disablekb: 1,
              },
            }}
            onReady={handlePlayerReady}
          />
          <div className={styles.customControls}>
            <button onClick={handlePlayPause} className={styles.controlButton}>
              <i className="bi bi-play-fill"></i>
            </button>
            <button
              onClick={() => player.seekTo(player.getCurrentTime() - 10)}
              className={styles.controlButton}
            >
              <i className="bi bi-skip-backward-fill"></i>
            </button>
            <button
              onClick={() => player.seekTo(player.getCurrentTime() + 10)}
              className={styles.controlButton}
            >
              <i className="bi bi-skip-forward-fill"></i>
            </button>
            <div
              className={styles.progressBarContainer}
              onClick={handleProgressClick}
            >
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className={styles.volumeControl}>
              <i className="bi bi-volume-up-fill"></i>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className={styles.volumeSlider}
              />
            </div>
            <button onClick={handleFullscreen} className={styles.controlButton}>
              <i className="bi bi-fullscreen"></i>
            </button>
          </div>
        </>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default YoutubePlayerComponent;
