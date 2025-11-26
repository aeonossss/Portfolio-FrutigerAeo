import nocover from '../Assets/cover/default.webp';
import scizzie from "../Assets/cover/scizzie.webp";
import flim from "../Assets/cover/flim.webp";
import donkey from "../Assets/cover/aqtc.webp";
import pvz from "../Assets/cover/pvz.webp";
import friday from "../Assets/cover/friday.webp";
import lease from "../Assets/cover/lease.webp";
import xplo from "../Assets/cover/xplo.webp";
import shop from "../Assets/cover/shop.webp";
import wiiparty from "../Assets/cover/wiiparty.webp";
import '../Styles/mediaPlayer.css';


function MediaPlayerRC({ player,  maximized }) {
    const { song } = player;

    const covers = [
        { title: "Aquatic Ambience - Scizzie", cover: scizzie },
        { title: "Aphex Twin - Flim", cover: flim },
        { title: "Aquatic Ambience [Restored] - Donkey Kong", cover: donkey },
        { title: "Friday Theme - Roblox 3008 OST", cover: friday },
        { title: "Lease - Takeshi Abo", cover: lease },
        { title: "Loonboon - Laura Shigihara", cover: pvz },
        { title: "Logging in - Xploshi", cover: xplo },
        { title: "Shop Theme - Nintendo DSi", cover: shop },
        { title: "Wii Party - Main Menu", cover: wiiparty },
        { title: "Zombies On Your Lawn (Instrumental) - Laura Shigihara", cover: pvz },
    ]

    if (!song){ 
        return (
            <div>
                No Song Selected.
            </div>
        );
    }

    const cover = covers.find(c => c.title === song.title)?.cover || nocover;

    return (
            <div className="media-player-rc-ui">
                <img src={cover} alt={song.title} className="cover-art" style={{transform: maximized ? 'scale(1.5)' : ''}} />
                <p className="song-title"
                    style={{
                        transform: maximized ? 'scale(1.5)' : '',
                        marginTop: maximized ? '50px' : ''
                    }}>
                    {song.title}
                </p>
            </div>
    );
}

export default MediaPlayerRC;
