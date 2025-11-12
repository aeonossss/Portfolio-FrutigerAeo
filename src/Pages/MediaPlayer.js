import { useState, useRef } from "react";
import '../Styles/mediaPlayer.css';
import playBtn from '../Assets/imgs/playbutton.png';
import pauseBtn from '../Assets/imgs/pausebutton.png';
import aquaticAmbience from "../Assets/audios/aquaticAmbience.mp3";

function MediaPlayer(){
    const songs = [
        { title: "Aquatic Ambience by Scizzie", src: aquaticAmbience },
    ];
    const [song, setSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    const selectSong = (song) =>{
        setSong(song);
        setIsPlaying(false);
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }

    const togglePlay = () =>{
        if(!song) return;
        if(!isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        } 
        else {
            audioRef.current.pause();
        }
        setIsPlaying(prev => !prev);
    }

    return <div>
        <div className="">
            <h3>Now Playing: {song ? song.title : ""}</h3>
            <img src={playBtn} className="play-btn" alt='play song' onClick={togglePlay}/>
            <div className="song-list">
                {songs.map(s =>(
                    <p key ={s.title} onClick={() => selectSong(s)}>{s.title}</p>
                ))}
            </div>

            {song && <audio ref={audioRef} src={song.src}></audio>}

        </div>
    </div>
}

export default MediaPlayer;