import React from 'react'
import Artist from '../img/artist.jpg'
import Check from '../img/check.png'
import {FaEllipsisH, FaHeadphones, FaCheck} from'react-icons/fa'

function Banner() {
    return (
        <div className='banner'>
            <img src={Artist} alt="" className="bannerImg"/>
        
        <div className='content'>
            <div className='breadCrump'>
                <p>Home <span> Popular Artist</span>
                </p>

                <i><FaEllipsisH/>   
                </i>
            </div>

            <div className='artist'>
                <div className='left'>
                    <div className='left'>
                        <div className='name'>
                            <h2>VanBap</h2>
                            <img src={Check} alt="" />
                        </div>

                        <p><i><FaHeadphones/></i>
                        82,456,938 <span>Monthly listeners</span>
                        </p>
                    </div>
                </div>
                <div className='right'>
                    <a href="#">Play</a>
                    <a href="#">
                        <i> <FaCheck/> </i>
                        Following
                    </a>
                </div>
            </div>
        </div>
        
        <div className='bottomLayer'>

        </div>
    </div>
    );
}

export {Banner};