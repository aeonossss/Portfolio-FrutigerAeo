import '../Styles/folder.css';
import { useState } from 'react';
import { pubmats, magazine, assets } from '../Components/PortfolioFolder'

function FolderRC() {
    const[active, setActive]=useState(null);

    const handleClick = (index) => {
        setActive(index===active ? null : index)
    };

    return(
        <div className='folder-container'>
        <ul className='pubmat-container' id='pubmat-section'>
            <h1>Publication Materials</h1>
            {Object.keys(pubmats).map((key, index) => (
            <li 
                key={key} 
                className={active === index ? 'active' : ''} 
                onClick={() => handleClick(index)}>
                    <img src={pubmats[key].src} alt={key} />
                    <p>{pubmats[key].title}</p>
            </li>
            ))}
        </ul>

        <ul className='magazine-container' id='magazine-section'>
            <h1>Magazine Layout</h1>
            {Object.keys(magazine).map((key, index) => (
                <li
                    key={key}
                    className={active === index ? 'active' : ''}
                    onClick={() => handleClick(index)}>
                        <img src={magazine[key].src} alt={key} />
                        <p>{magazine[key].title}</p>
                </li>
            ))}
        </ul>

        <ul className='asset-design' id='assets-section'>
            <h1>Asset Designs</h1>
            {Object.keys(assets).map((key, index) => (
                <li
                    key={key}
                    className={active === index ? 'active' : ''}
                    onClick={() => handleClick(index)}>
                        <img src={assets[key].src} alt={key} />
                        <p>{assets[key].title}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default FolderRC;