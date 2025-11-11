import '../Styles/tab.css';
import Home from '../Pages/Home.js'
import MediaPlayer from '../Pages/MediaPlayer.js'
import { useState } from 'react';
import wmpIcon from "../Assets/imgs/wmp.png";
import homeIcon from "../Assets/imgs/vista_info.ico";
import lightButton from "../Assets/imgs/light-mode.png";
import darkButton from "../Assets/imgs/dark-mode.png";
import backButton from "../Assets/imgs/back-button.png";
import forwardButton from "../Assets/imgs/fwd-button.png";
import searchIcon from "../Assets/imgs/search.png";

function Tab() {
  const icons = [
    { id: 1, title: "Home", icon: homeIcon },
    { id: 2, title: "Media Player", icon: wmpIcon },
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
        />
      ))}
    </div>
  );
}

function DraggableWindow({ window, onDrag, onMinimize, onMaximize, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

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
      className={`draggable-window ${window.minimized ? 'minimized' : ''}`}
      style={{ top: window.maximized ? 0 : window.y,
               left: window.maximized ? 0 : window.x,
               width: window.maximized ? '100vw' : '70vw',
               height: window.maximized ? '100vh' : '70vh',
               position: "absolute" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDragStart={(e) => e.preventDefault()}
    >
    
      <div
        className="title-bar"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="nav-buttons">
          <img src={backButton} className='back-button'></img>
          <img src={forwardButton} className='forward-button'></img>
        </div>
        <span>{window.title}</span>
        <div className='search-bar'>
            <img src={searchIcon} className='search' alt='Search Button'></img>
        </div>
        <div className="controls">
          <button className='minimize' onClick={() => onMinimize(window.id)}>_</button>
          <button className='maximize' onClick={() => onMaximize(window.id)}>□</button>
          <button className='exit' onClick={() => onClose(window.id)}>×</button>
        </div>
      </div>

      {!window.minimized && (
        <div className="window-content">
          <div className='top-buttons'>
            <img src={lightButton} className='light-button'alt='Light Mode'></img>
            <img src={darkButton} className='dark-button'alt='Dark Mode'></img>
            <div className='wmp-button'>
              <img src={wmpIcon} className='wmp-icon'></img>
              <p className='wmp-title'>Media Player</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Tab;
