import { useState } from 'react';
import { closeIcon, homeIcon, playBlackIcon, playGeryIcon, prevIcon,nextIcon, userIcon } from '../assests';
import './style.css';

const FixFooter = props =>{

    const [slideUp,setSlideUp] = useState(false);

    return (
        <div className = {`fix-footer ${slideUp ? 'active ' : ''}`}>
                <div onClick={() =>setSlideUp(!slideUp)} className='slide-up-btn'>
                </div>

                <div className="d-visibility"></div>
                {slideUp &&(
                        <div className="audio-player-lg">
                        <div className="audio-cover-lg-img">
                            <img />
                        </div>
                        <div>
                        <h2> Beyond the line </h2>
                        <h2> Farhan Shaikh </h2>
                        </div>
                        <div className="audio-player-progress">
                            <input type ="range"
                                    min = {0}
                                    max = {100}/>
                        </div>  
                            <div className="audio-controls flex justify-sb">
                                <button>
                                    <img src= { prevIcon}/>
                                </button>

                                <div className="play-pause-btn">
                                <button>
                                    <img src={playBlackIcon}/>
                                </button>
                                </div>
                                <button>
                                    <img src={nextIcon}/>
                                </button>

                            </div>
                        </div>
                    )
                }
                
                {!slideUp &&(
                        <>
                        <div className="mini-player flex justify-sb align-center mtb-10">
                    <div className = "flex align-center">
                    <div className="artist-cover-img ">
                            <img/>
                        </div>
                        <div className="mini-player-info mlr-10">
                            <p>Beyond the Line</p>
                            <p>Farhan Shaikh</p>
                        </div>

                    </div>
                        <div className="mini-player-control flex">
                            <button>
                                <img src={playGeryIcon}/>
                            </button>
                            <button>
                                <img src={closeIcon}/>
                            </button>
                        </div>
                    </div>
                    {/*Navigation menu*/}
                <div className="navigation-menu flex justify-evenly">

                    <a>
                        <div>
                        <img src={homeIcon}/>
                        </div>
                           
                        <div>
                        <span>Home</span>
                        </div>
                    </a>

                    <a>
                        <div>
                        <img src={userIcon}/>
                        </div>

                        <div>
                        <span>Profile</span>
                        </div>
                    </a>

                </div>
                        </>
                    )
                }

                    
            </div>
        
    );
}
export default FixFooter;