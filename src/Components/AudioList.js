import React from 'react'
import { FaHeadphones, FaHeart, FaRegHeart, FaRegClock } from 'react-icons/fa';

function AudioList() {
    return (
        <div className="audioList">
            <h2 className='title'>
                The list <span>12 songs</span>
            </h2>
            <div className="songsContainer">
                <div className="songs">
                    <div className="count">#01</div>
                    <div className="song">
                        <div className="imgBox">
                            <img src="" alt="" />
                        </div>

                        <div className="section">
                            <p className='songName'>Take me on
                            <span className='spanArtist'>Artist Name</span>
                            </p>

                            <div className='hits'>
                                <p className='hit'>
                                    <i><FaHeadphones/></i> 82,145,521
                                </p>

                                <p className='duration'>
                                    <i><FaRegClock/></i> 03.04
                                </p>

                                <div className='favourite'>
                                    <i><FaHeart/></i>
                                    <i><FaRegHeart/></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {AudioList};