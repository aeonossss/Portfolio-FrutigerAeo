import '../Styles/profile.css';
import rct from '../Assets/imgs/Reactlogo.png';
import fltr from '../Assets/imgs/flutterlogo.png';

function ProfileRC(){
    return(
        <div className='rc-container'>
            <p className='developer'> Eya Isabel Yalung</p>
            <p className='dev-title'> Front-End Developer </p>
            <p className='about'>
                Creative and detail-oriented Graphic and Web Designer/Developer with a passion for crafting engaging 2D/3D designs and building websites that are both functional and user-friendly. Known for blending design sensibility with technical expertise to create meaningful digital experiences. Continuously expanding skills through hands-on projects and On-the-Job Training (OJT) / internship experiences, bringing curiosity and dedication to every project.
            </p>
            <div className='inner-content'>
                <div className='left-inner-content'>
                    <p className='skills-title'>Skills</p>
                    <ul className='skills-list'>
                        <li>Communication</li>
                        <li>Creativity</li>
                        <li>Adaptability</li>
                        <li>Collaboration</li>
                        <li>Teamwork</li>
                        <li>Problem-Solving</li>
                    </ul>
                </div>
                <div className='right-inner-content'>
                    <p className='education-title'>Software & Tools</p>
                    <ul className='education-list'>
                        <li>
                            <img src={rct} alt='react' className='react-logo' />
                            <img src={fltr } alt='flutter' className='flutter-logo' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileRC;