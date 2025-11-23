import me from '../Assets/imgs/me.jpg';
import lnkdn from '../Assets/imgs/lnkdn.png';
import guthib from '../Assets/imgs/guthib.png';
import '../Styles/profile.css';

function Profile({maximized}){
    return(
        <div>
            <div className="profile-container" style={{ transform: maximized ? "scale(1.5)" : "scale(1)" }}>
                <img
                    src={me}
                    alt="Profile"
                    className="profile-pic"
                />
                <p className='developer'> Eya Isabel Yalung</p>
                <p className='dev-title'> Front-End Developer </p>
                <div className='icon-links'>
                    <a href='https://www.linkedin.com/in/e-yalung/' target='_blank' rel='noopener noreferrer'>
                        <img src={lnkdn} alt='linkedin-link'/>
                    </a>
                    <a href='https://github.com/aeonossss' target='_blank' rel='noopener noreferrer'>
                        <img src={guthib} alt='github-link' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;