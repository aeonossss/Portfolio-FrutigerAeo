import '../Styles/folder.css';
import folder from '../Assets/imgs/folder.webp';

function FolderRC() {
    return(
        <div className='folder-container'>
            <ul className='folder-list'>
                <li className='folder-one'>
                    <img src={folder} alt='Folder Icon' className='folder-icon'/>
                    <p className='folder-text'> Folder 1 </p>
                </li>
                <li className='folder-one'>
                    <img src={folder} alt='Folder Icon' className='folder-two'/>
                    <p className='folder-text'> Folder 2 </p>
                </li>
            </ul>
        </div>
    )
}

export default FolderRC;