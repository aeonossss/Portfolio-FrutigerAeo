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
import grz from '../Assets/audios/Laura Shigihara - Graze the Roof.mp3';
import wtry from '../Assets/audios/Laura Shigihara - Watery Graves (Fast Version).mp3';
import wtrygame from '../Assets/audios/Laura Shigihara - Watery Graves (In-Game).mp3';
import styl from "../Assets/audios/Style Savvy Trendsetter's Opening Theme.mp3";
import nxtbot from "../Assets/audios/Nico's Nextbots OST - Sherbet Lobby.mp3";
import dtng from "../Assets/audios/Undertale OST - Dating Start.mp3";
import rtro from "../Assets/audios/Tsundere Twintails - Retro Dream.mp3";
import frt from "../Assets/audios/Froot.mp3";
import wiititle from "../Assets/audios/Wii Sports OST - Title Screen.mp3";

export const songs = [
  { title: "Aphex Twin - Flim", src: flim },
  { title: "Aquatic Ambience - Scizzie", src: scizzie },
  { title: "Aquatic Ambience [Restored] - Donkey Kong", src: aqtc },
  { title: "Friday Theme - Roblox 3008 OST", src: friday },
  { title: "Froot!", src: frt },
  { title: "Graze the Roof - Laura Shigihara", src: grz },
  { title: "Lease - Takeshi Abo", src: lease },
  { title: "Logging in - Xploshi", src: xplo },
  { title: "Loonboon - Laura Shigihara", src: lnbm },
  { title: "Nico's Nextbots OST - Sherbet Lobby", src: nxtbot },
  { title: "Shop Theme - Nintendo DSi", src: shop },
  { title: "Style Savvy Trendsetter's Opening Theme", src: styl },
  { title: "Tsundere Twintails - Retro Dream", src: rtro },
  { title: "Undertale OST - Dating Start!", src: dtng },
  { title: "Watery Graves (Fast Version) - Laura Shigihara", src: wtry },
  { title: "Watery Graves (In-Game) - Laura Shigihara", src: wtrygame },
  { title: "Wii Party - Main Menu", src: wiiparty },
  { title: "Wii Sports OST - Title Screen", src: wiititle },
  { title: "Zombies On Your Lawn (Instrumental) - Laura Shigihara", src: onyolawn }
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
