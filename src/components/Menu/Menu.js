import { Link } from "react-router-dom";
import "./Menu.css"

export function Menu(){
    
    
    return(
        <div id="menuContainer">
            <p className="menuItems"><Link to={'/'} className={"link"}>MENU</Link></p>
            <p className="menuItems"><Link to={'/ranking'} className={"link"}>RANKING</Link></p>
            <p className="menuItems"><Link to={'/quizAD'} className={"link"}>QUIZ</Link></p>
        </div>
    )
}