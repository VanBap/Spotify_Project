import React, {useEffect} from 'react'
import '../Styles/MainContainer.css'
import {Banner} from "./Banner"
import { FaUsers } from 'react-icons/fa';


function MainContainer()
{

  useEffect(() => { // useEffect là 1 mục trong React
    const allLi = document.querySelector('.menuList').querySelectorAll('li'); //the querySelector() method returns the first element that matches a CSS selector.
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

  return ( <div className='mainContainer'> 
  <Banner/>
  <div className='menuList'>
    <ul> 
      <li><a href="#">Popular</a></li>
      <li><a href="#">Albums</a></li>
      <li><a href="#">Songs</a></li>
      <li><a href="#">Fans</a></li>
      <li><a href="#">About</a></li>
    </ul>

    <p><i><FaUsers/> 8.2M <span>Followers</span></i></p>
  </div>
  </div>
  );
}
export {MainContainer};
