import React from 'react'
import '../Styles/LeftMenu.css';

import {FaSpotify, FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from 'react-icons/bi';
import {MenuList} from'./MenuList';
import {Menu} from'./Menu';
import {MenuPlayList} from "./MenuPlaylist";
import {TrackList} from "./TrackList";


function LeftMenu()
{
  return <div className="LeftMenu">
    <div className="logoContainer">
    <i>
      <FaSpotify/>
    </i>
    <h2>VanBap music</h2>
    <i>
      <FaEllipsisH/>
    </i>
    </div>
    
    <div className="searchBox">
      <input type="text" placeholder='Search...'/>
      <i className='searchIcon'>
        <BiSearchAlt/>
      </i>
    </div>

    <Menu title={Menu} menuObject={MenuList}/>
    <MenuPlayList />
    <TrackList />
  </div>;
}
export {LeftMenu};
