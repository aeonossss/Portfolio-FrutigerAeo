import '../Styles/folder.css';
import folder from '../Assets/imgs/folder.png';
function FolderRC() {
    return(
        <div>
            <ul className='folder-list'>
                <li>
                    <img src={folder} alt='Folder Icon' className='folder-icon'/>
                    <p className='folder-text'> SubFolder </p>
                </li>
            </ul>
        </div>
    )
}

export default FolderRC;