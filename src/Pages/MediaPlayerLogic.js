import { useState, useRef, useEffect } from "react";
import scizzie from "../Assets/audios/aquaticAmbience.mp3";
import wiiparty from '../Assets/audios/Wii Party - Main Menu.mp3';
import flim from '../Assets/audios/Aphex Twin - Flim.mp3';
import lnbm from '../Assets/audios/Laura Shigihara - Loonboon.mp3';
import aqtc from '../Assets/audios/Aquatic Ambience [Restored].mp3';
import onyolawn from '../Assets/audios/Laura Shigihara - Zombies On Your Lawn (Instrumental).mp3';
import shop from '../Assets/audios/Nintendo DSi - Shop Theme.mp3';
import friday from '../Assets/audios/Roblox 3008 OST - Friday Theme.mp3';
import xplo from '../Assets/audios/Xploshi - Logging in.mp3';
import lease from '../Assets/audios/Takeshi Abo - LEASE.mp3';

export const songs = [
  { title: "Aphex Twin - Flim", src: flim },
  { title: "Aquatic Ambience - Scizzie", src: scizzie },
  { title: "Aquatic Ambience [Restored] - Donkey Kong", src: aqtc },
  { title: "Friday Theme - Roblox 3008 OST", src: friday },
  { title: "Lease - Takeshi Abo", src: lease },
  { title: "Loonboon - Laura Shigihara", src: lnbm },
  { title: "Logging in - Xploshi", src: xplo },
  { title: "Shop Theme - Nintendo DSi", src: shop },
  { title: "Wii Party - Main Menu", src: wiiparty },
  { title: "Zombies On Your Lawn (Instrumental) - Laura Shigihara", src: onyolawn },
];

export function useAudioPlayer() {
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleTimeUpd = () => setCurrentTime(audioRef.current.currentTime);
  const handleLoaded = () => setDuration(audioRef.current.duration);
  const handleSeek = (newTime) => {
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const selectSong = (s) => {
    if (song?.title === s.title) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
      return;
    }
    setSong(s);
  };

  const togglePlay = () => {
    if (!song) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return {
    songs,
    song,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    formatTime,
    handleTimeUpd,
    handleLoaded,
    handleSeek,
    selectSong,
    togglePlay,
    setSong,
  };
}
