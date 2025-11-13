function MediaPlayerRC({ player }) {
    const { song } = player;

    if (!song) return <div>No song selected</div>;

    return (
        <div>
            <h3>{song.title}</h3>
        </div>
    );
}

export default MediaPlayerRC;
