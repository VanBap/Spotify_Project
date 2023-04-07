import React, { useEffect } from "react";

function Menu({title, menuObject}) { //prop, title

    useEffect(() => { // useEffect là 1 mục trong React
        const allLi = document.querySelector('.MenuContainer ul').querySelectorAll('li'); //the querySelector() method returns the first element that matches a CSS selector.
                                                                                          //To return all matches (not only the first), use the querySelectorAll() instead.
        // ================ Click vào mục nào thì mục đó được highlight = thanh màu xanh lá cây ==================== //
        function changeMenuActive() {
            allLi.forEach(n => n.classList.remove("active"));
            this.classList.add("active");           /*The this keyword refers to different objects depending on how it is used:
                                                    In an object method, this refers to the object.
                                                    Alone, this refers to the global object.
                                                    In a function, this refers to the global object.
                                                    In a function, in strict mode, this is undefined.
                                                    In an event, this refers to the element that received the event.
                                                    Methods like call(), apply(), and bind() can refer this to any object.*/
        }
    allLi.forEach(n => n.addEventListener('click', changeMenuActive))
    }, []);

    return( 
    <div className="MenuContainer">
        <p className="title">{title}</p>

        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li key={menu.id}>
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