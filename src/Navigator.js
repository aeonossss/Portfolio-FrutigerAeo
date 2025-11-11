import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import MediaPlayer from './Pages/MediaPlayer';

function Navigator(){
    return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/media-player' element={<MediaPlayer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigator
