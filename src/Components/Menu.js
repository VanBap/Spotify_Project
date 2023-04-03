import React, { useEffect} from "react";

function Menu({title, menuObject}) { //prop, title
    return( 
    <div className="MenuContainer">
        <p className="title">{title}</p>

        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li>
                        {" "}
                        <a href="#">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                    </li>
                ))
            }

            
        </ul>
    </div>
    );
}

export {Menu };
