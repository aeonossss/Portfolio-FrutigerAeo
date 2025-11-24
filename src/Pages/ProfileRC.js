import '../Styles/profile.css';
import rct from '../Assets/imgs/Reactlogo.png';
import fltr from '../Assets/imgs/flutterlogo.png';
import drt from '../Assets/imgs/dartlogo.png';
import ai from '../Assets/imgs/AILogo.png';
import ps from '../Assets/imgs/PSLogo.png';
import figma from '../Assets/imgs/figma.png';
import csp from '../Assets/imgs/csp.png';
import prc from '../Assets/imgs/procreate.png';
import vs from '../Assets/imgs/vscode.png';
import ard from '../Assets/imgs/androidstudio.png';

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
                        <li>Active listening</li>
                        <li>Curiosity</li>
                        <li>Analytical thinking</li>
                    </ul>
                </div>
                <div className='right-inner-content'>
                    <p className='sftware-title'>Software & Tools</p>
                    <ul className='sftware-list'>
                        <li>
                            <img src={rct} alt='React'/>
                            <img src={fltr} alt='Flutter'/>
                            <img src={drt} alt='Dart'/>
                            <img src={figma} alt='Figma'/>
                            <img src={ai} alt='Adobe Illustrator'/>
                            <img src={ps} alt='Adobe Photoshop'/>
                            <img src={csp} alt='Clip Studio Paint'/> 
                            <img src={prc} alt='Procreate'/>
                            <img src={vs} alt='Visual Studio Code'/>
                            <img src={ard} alt='Android Studio'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileRC;