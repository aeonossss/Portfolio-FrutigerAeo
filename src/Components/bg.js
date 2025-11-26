import '../Styles/bg.css';
import { useState } from 'react'

function Bg(){
    const [showBanner, setShowBanner] = useState(true);

    return(
        <div className="bg-img">
            {showBanner && (
                <div className='responsive-banner'>
                The site provides a better experience when viewed on a desktop.
                <button 
                    className='ok-button'
                    onClick={() =>setShowBanner(false)}>
                        OK
                </button>
            </div>
            )}
        </div>
    );
}

export default Bg;