import '../Styles/mediaPlayer.css';

export default function MediaPlayer({ player, maximized }) {
  const { songs, selectSong } = player;

  return (
    <div className="song-list">
      {songs.map((s) => (
        <p
          style={{ 
            fontWeight: player.song?.title === s.title ? 'bold' : 'normal',
            fontSize: maximized ? '1.3em' : '1em'

          }}
          key={s.title}
          onClick={() => selectSong(s)
          }
        >
          {s.title}
        </p>
      ))}
    </div>
  );
}
