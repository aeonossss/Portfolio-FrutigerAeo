import nocover from '../Assets/cover/default.jpg';
import scizzie from "../Assets/cover/scizzie.png";
import flim from "../Assets/cover/flim.jpg";
import donkey from "../Assets/cover/aqtc.jpg";
import pvz from "../Assets/cover/pvz.jpg";
import friday from "../Assets/cover/friday.png";
import lease from "../Assets/cover/lease.jpg";
import xplo from "../Assets/cover/xplo.jpg";
import shop from "../Assets/cover/shop.jpg";
import wiiparty from "../Assets/cover/wiiparty.jpg";
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
                <img src={cover} alt={song.title} className="cover-art" style={{transform: maximized ? 'scale(2)' : 'scale(1)'}} />
                <p className="song-title" style={{transform: maximized ? 'scale(1.5)' : 'scale(1)'}}>{song.title}</p>
            </div>
    );
}

export default MediaPlayerRC;
