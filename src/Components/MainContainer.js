import React from 'react'
import '../Styles/MainContainer.css'
import {Banner} from "./Banner"
import { FaUsers } from 'react-icons/fa';


function MainContainer()
{
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
