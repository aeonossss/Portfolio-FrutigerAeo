

function SectionButtons(){
    const scrolltoSection=(id)=>{
        const element = document.getElementById(id);
        if (element){
            element.scrollIntoView({behavior:'smooth', block: 'start'});
        }
    };

    return(
        <div className="section-buttons">
            <p onClick={() => scrolltoSection('pubmat-section')}>Publication Materials</p>
            <p onClick={() => scrolltoSection('magazine-section')}>Magazine Layout</p>
            <p onClick={() => scrolltoSection('assets-section')}>Asset Designs</p>
        </div>
    )
}

export default SectionButtons;