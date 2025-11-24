import '../Styles/profile.css';
import globe from '../Assets/imgs/globe.png';

function ProfileBC(){
    return <div>
        <div className='bc-container'>
            <img src={globe} alt='Globe Icon' className='globe-icon'/>
            <div className='languages'>
                <p className='eng'>English</p>
                <p className='fil'>Filipino</p>
                <p className='kap'>Kapampangan</p>
            </div>
                <p className='footer-text'> Eya Isabel Yalung © 2025. All rights reserved. </p>
            </div>
            </div>
}
export default ProfileBC;