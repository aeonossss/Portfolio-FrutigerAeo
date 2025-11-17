import playBtn from '../Assets/imgs/playbutton.png';
import pauseBtn from '../Assets/imgs/pausebutton.png';
import backBtn from '../Assets/imgs/back-button.png';
import fwdBtn from '../Assets/imgs/fwd-button.png';
import '../Styles/mediaPlayer.css';

export default function MediaPlayerBC({ player }) {
  const {
    song,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    formatTime,
    handleTimeUpd,
    handleLoaded,
    handleSeek,
    togglePlay,
  } = player;

  if (!song) return null;

  return (
    <div className="media-player-ui">

      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={handleTimeUpd}
        onLoadedData={handleLoaded}
      />

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => handleSeek(Number(e.target.value))}
        className="progress-bar"
        style={{
          '--progress': `${(currentTime / duration) * 100}%`
        }}
      />

      <div className="ui-btns">
        <img
          src={isPlaying ? pauseBtn : playBtn}
          className="play-btn"
          alt="play/pause"
          onClick={togglePlay}
        />
      </div>

      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>

    </div>
  );
}
