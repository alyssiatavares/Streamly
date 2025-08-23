import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const durationInSeconds = timeInSeconds(duration);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const [isPlaying, setIsPlaying] = useState(false);
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };
  const setProgressBar = (currTime) => {
    const progress = (currTime / durationInSeconds) * 100 + "%";
    progressBar.current.style.setProperty("--_progress", progress);
  };
  const changeSong = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(formatTime(0));
    setProgressBar(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
        setProgressBar(audioPlayer.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`} onClick={changeSong}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={`/song/${randomId2FromArtist}`} onClick={changeSong}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
