import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import MediaPlayer from './Pages/MediaPlayer';

function Navigator(){
    return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/media-player' element={<MediaPlayer/>} />
          <Route path='/portfolio' element={<Folder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigator
