import React from "react";
import {FaPlus} from "react-icons/fa";
import {BsMusicNoteList, BsTrash} from "react-icons/bs";
import {PlayList} from"./PlayList";


function MenuPlayList() {
    return <div className="playListContainer">
    <div className="nameContainer">
        <p>PlayList</p>
        <i>
            <FaPlus/>

        </i>
    </div>

    <div className="playListScroll">
        <div className="playlist">
            <i className="list">
                 <BsMusicNoteList/>
             </i>
      
            <p>Sample Name</p>

            <i className="trash">
            <BsTrash/>
            </i>
        </div>
      
    </div>

     </div>;
}

export { MenuPlayList };