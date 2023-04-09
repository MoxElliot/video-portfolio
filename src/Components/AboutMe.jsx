import React from 'react';
import HeaderStat from './HeaderStat';

const AboutMe = () => {
    return (
        <div className='about-me' id='about-me'>
            <div className='about-photo'></div>
            <div className='about-header'>
                <h1>Jacob Doffing</h1>
            </div>
            <div className='about-stats container text-center'>
                <div className='about-stats-row  row row-cols-3'>
                    <HeaderStat statNum="19.7" statType="points" />
                    <HeaderStat statNum="8.7" statType="rebounds" />
                    <HeaderStat statNum="4.7" statType="assists" />
                    <HeaderStat statNum="2.2" statType="blocks" />
                    <HeaderStat statNum="1.3" statType="steals" />
                    <HeaderStat statNum="33.7" statType="minutes" />
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