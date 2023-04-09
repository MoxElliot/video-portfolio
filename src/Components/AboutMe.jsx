import React from 'react';
import HeaderStat from './HeaderStat';

const AboutMe = () => {
    return (
        <div className='about-me' id='about-me'>
            <div className='about-photo'></div>
            <div className='about-header'>
                <h1>Jacob Doffing</h1>
            </div>
            <div className='about-stats container d-flex  justify-content-end'>
                <div className='about-stats-row  row row-cols-1'>
                    <div className="col">
                    <HeaderStat statNum="30" statType="GP" />
                    </div>
                    <div className="col">

                    <HeaderStat className="col" statNum="57.1" statType="FG %" />
                    </div>
                </div>
                <div className='about-stats-row  row row-cols-1'>
                    <div className="col">   
                    <HeaderStat className="col" statNum="30.0" statType="3PT %" />
                    </div>
                    <div className="col">
                    <HeaderStat className="col"  statNum="82.3" statType="FT %" />
                    </div>
                </div>
            </div>
            <div className='about-summary'>
                <p>Jacob Doffing is a phenom on the basketball court. Through a life of doing the work, making sacrifices, he's become a dominant player.</p>
                
                <p>Check out his video and statistics below and contact Jacob to set up a conversation.</p>
            </div>
        </div>
    )
}

export default AboutMe