import { useState, useRef, useEffect } from "react";
import '../Styles/mediaPlayer.css';
import playBtn from '../Assets/imgs/playbutton.png';
import pauseBtn from '../Assets/imgs/pausebutton.png';
import aquaticAmbience from "../Assets/audios/aquaticAmbience.mp3";
import wiiparty from '../Assets/audios/Wii Party - Main Menu.mp3';
import flim from '../Assets/audios/Aphex Twin - Flim.mp3';
import lnbm from '../Assets/audios/Laura Shigihara - Loonboon.mp3';
import aqtc from '../Assets/audios/Aquatic Ambience [Restored].mp3';
import onyolawn from '../Assets/audios/Laura Shigihara - Zombies On Your Lawn (Instrumental).mp3';
import shop from '../Assets/audios/Nintendo DSi - Shop Theme.mp3';
import friday from '../Assets/audios/Roblox 3008 OST - Friday Theme.mp3';
import xplo from '../Assets/audios/Xploshi - Logging in.mp3'
import lease from '../Assets/audios/Takeshi Abo - LEASE.mp3';


function MediaPlayer(){
    const songs = [
        {title: "Lease - Takeshi Abo", src: lease},
        {title: "Aquatic Ambience - Scizzie", src: aquaticAmbience},
        {title: "Wii Party - Main Menu", src: wiiparty},
        {title: "Aphex Twin - Flim", src: flim},
        {title: "Loonboon - Laura Shigihara", src:lnbm},
        {title: "Aquatic Ambience [Restored]", src: aqtc},
        {title: "Zombies On Your Lawn (Instrumental) - Laura Shigihara", src: onyolawn},
        {title: "Shop Theme - Nintendo DSi", src:shop},
        {title: "Friday Theme - Roblox 3008 OST", src:friday},
        {title: "Logging in - Xploshi", src: xplo}

    ];
    const [song, setSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    useEffect(()=>{
        if(song && audioRef.current){
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [song]);

    const selectSong = (s) =>{
        if(song?.title === s.title){
            if(isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(prev=>!prev);
            return;
        }
        setSong(s);
    }

    const togglePlay = () =>{
        if(!song || !audioRef.current) return;
        if(!isPlaying) audioRef.current.play();
        else audioRef.current.pause();
        setIsPlaying(prev => !prev);
    }

    return <div>
        <div className="">
            <h3>Now Playing: {song ? song.title : ""}</h3>
            <img src={isPlaying ? pauseBtn : playBtn} className="play-btn" alt='play/pause' onClick={togglePlay}/>
            <div className="song-list">
                {songs.map(s =>(
                    <p key ={s.title} onClick={() => selectSong(s)}>
                        {s.title} 
                    </p>
                ))}
            </div>

            {song && <audio ref={audioRef} src={song.src}></audio>}

        </div>
    </div>
}

export default MediaPlayer;