import '../Styles/mediaPlayer.css';

export default function MediaPlayer({ player }) {
  const { songs, selectSong, song } = player;

  return (
    <div className="song-list">
      {songs.map((s) => (
        <p
          key={s.title}
          onClick={() => selectSong(s)}
        >
          {s.title}
        </p>
      ))}
    </div>
  );
}
