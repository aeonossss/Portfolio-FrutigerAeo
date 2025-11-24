import '../Styles/tab.css';
import { useState } from 'react';
import { useAudioPlayer } from '../Pages/MediaPlayerLogic.js';
import MediaPlayer from '../Pages/MediaPlayer.js'
import MediaPlayerRC from '../Pages/MediaPlayerRC.js'
import MediaPlayerBC from '../Pages/MediaPlayerBC.js'
import Profile from '../Pages/Profile.js';
import ProfileRC from '../Pages/ProfileRC.js';
import ProfileBC from '../Pages/ProfileBC.js';
import wmpIcon from "../Assets/imgs/wmp.png";
import homeIcon from "../Assets/imgs/vista_info.ico";
import folder from "../Assets/imgs/folder.png";
import FolderRC from '../Pages/FolderRC.js';
import lightButton from "../Assets/imgs/light-mode.png";
import darkButton from "../Assets/imgs/dark-mode.png";
import backButton from "../Assets/imgs/back-button.png";
import forwardButton from "../Assets/imgs/fwd-button.png";
import searchIcon from "../Assets/imgs/search.png";
import chevronIcon from "../Assets/imgs/chevron.png";
import downIcon from "../Assets/imgs/down.png";
import Folder from '../Pages/Folder.js';


function Tab() {
  const icons = [
    { id: 1, title: "Profile", icon: homeIcon },
    { id: 2, title: "Media Player", icon: wmpIcon },
    { id: 3, title: "Portfolio", icon: folder },
  ];

  const [windows, setWindows] = useState([]);

  const openWindow = (icon) => {
    const exists = windows.find(w => w.title === icon.title);
    if (exists) return;
    setWindows(prev => [
      ...prev,
      {
        id: icon.id,
        title: icon.title,
        x: 100 + prev.length * 50,
        y: 100 + prev.length * 50,
        minimized: false,
        closed: false,
      },
    ]);
  };

  const handleDrag = (id, dx, dy) => {
  setWindows(prev =>
    prev.map(w => {
      if (w.id !== id) return w;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let newX = w.x + dx;
      let newY = w.y + dy;

      const windowWidth = 350;
      const windowHeight = 250;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + windowWidth > vw) newX = vw - windowWidth;
      if (newY + windowHeight > vh) newY = vh - windowHeight;

      return { ...w, x: newX, y: newY };
    })
  );
};

  const handleMinimize = (id) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, minimized: !w.minimized, maximized:false } : w))
    );
  };

  const handleMaximize = (id) =>{
    setWindows(prev =>
      prev.map(w => (w.id === id ? {...w, maximized: !w.maximized, minimized: false} : w))
    );
  };

  const handleClose = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div >
      <div className="tab-icons">
        {icons.map(icon => (
          <div key={icon.id} className="icon" onClick={() => openWindow(icon)}>
            <img src={icon.icon} alt={icon.title} />
            <p>{icon.title}</p>
          </div>
        ))}
      </div>

      {windows.map(w => (
        <DraggableWindow
          key={w.id}
          window={w}
          onDrag={handleDrag}
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onClose={handleClose}
          openWindow={openWindow}
        />
      ))}
    </div>
  );
}

function DraggableWindow({ window, onDrag, onMinimize, onMaximize, onClose, openWindow }) {
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const player = useAudioPlayer();

  const handleMouseDown=(e)=>{
    setDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
    document.body.style.userSelect = 'none';
    document.body.style.overflow = 'hidden';
  };

  const handleMouseUp=()=>{
    setDragging(false);
    document.body.style.userSelect = 'auto';
    document.body.style.overflow = 'auto';
  };

  const handleMouseMove=(e)=>{
    if (!dragging) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    onDrag(window.id, dx, dy);
    setStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={`draggable-window  ${window.minimized ? 'minimized' : ''}
                                    ${window.maximized ? 'maximized' : ''}`}
      style={{ top: window.maximized ? 0 : window.y,
               left: window.maximized ? 0 : window.x,
               width: window.maximized ? '100vw' : '70vw',
               height: window.maximized ? '100vh' : '70vh',
               position: "absolute" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className='main-top-container'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <span className='window-title'>{window.title}</span>
        <div className="controls">
            <button className='minimize' onClick={() => onMinimize(window.id)}>_</button>
            <button className='maximize' onClick={() => onMaximize(window.id)}>□</button>
            <button className='exit' onClick={() => onClose(window.id)}>×</button>
          </div>
        <div className='title-bar'>
          {!window.minimized && (
            <div className='title-bar-container'>
              <div className='nav-buttons'>
                <img src={backButton} className='back-button' />
                <img src={forwardButton} className='forward-button' />
                <img src={downIcon} className='down-button' />
              </div>
              <div className='path-bar'>
                <img src={chevronIcon} className='chevron' alt='dropdown Button' />
              </div>
              <div className='search-bar'>
                <img src={searchIcon} className='search' alt='Search Button' />
              </div>
            </div>
          )}
        </div>
      </div>

      {!window.minimized && (
        <div className="window-content">

          <div className='top-buttons'>
            <img src={lightButton} className='light-button' alt='Light Mode'/>
            <img src={darkButton} className='dark-button' alt='Dark Mode'/>
            <div className='divider'>|</div>
            <div className='tab-buttons'>
              {window.title === "Profile" && (
              <div className='wmp-button'>
              <img src={wmpIcon} className='wmp-icon'></img>
              <p className='wmp-title' onClick={() => openWindow({id: 2, title:"Media Player", icon: wmpIcon})}>Media Player</p>
            </div>
            )}
            {window.title === "Media Player" && (
              <div className='profile-button'>
              <img src={homeIcon} className='profile-icon'></img>
              <p className='profile-' onClick={() => openWindow({id: 1, title:"Profile", icon: homeIcon})}>Profile</p>
            </div>
            )}
            </div>
          </div>
          

          <div className='inner-parent-container'>
            <div className={`left-content
                              ${window.maximized ? 'maximized' : ''}
                              ${window.title === "Profile" ? 'profile' : ''}
                              ${window.title === "Portfolio" ? 'folder' : ''}
                              ${window.title === "Media Player" ? 'wmp' : ''}`}>
              {window.title === "Media Player" && <MediaPlayer player={player} />}
              {window.title === "Profile" && <Profile maximized={window.maximized} />}
              {window.title === "Portfolio" && <Folder />}
            </div>

            <div className={`right-content 
                              ${window.maximized ? 'maximized' : ''}
                              ${window.title === "Profile" ? 'profile' : ''}
                              ${window.title === "Portfolio" ? 'folder' : ''}
                              ${window.title === "Media Player" ? 'wmp' : ''}`}>
              {window.title === "Media Player" && <MediaPlayerRC player={player} maximized={window.maximized} />}
              {window.title === "Profile" && <ProfileRC />}
              {window.title === "Portfolio" && <FolderRC />}
            </div>
          </div>
          <div className='bottom-content'>
            {window.title === "Media Player" && <MediaPlayerBC player={player} />}
            {window.title === "Profile" && <ProfileBC />}
          </div>
        </div>
      )}
    </div>
  );
}


export default Tab;
