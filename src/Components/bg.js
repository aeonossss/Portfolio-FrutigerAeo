import '../Styles/bg.css';
import wmpIcon from "../Assets/imgs/wmp.png";
import homeIcon from "../Assets/imgs/vista_info.ico";

function Bg(){
    const icons = [
    { id: 1, title: "Home", icon: homeIcon },
    { id: 2, title: "Media Player", icon: wmpIcon },];
    
    return <div>
        <div className="bg-img">
        </div>
    </div>
}

export default Bg;