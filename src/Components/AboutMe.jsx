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
                <p>Nowhere in the world will you have seen talent like Elliot’s Nephew. That’s why he has a better website than any other player.</p>
                
                <p>He’ll have an even better introduction written.</p>

                <p>And probably a lot more sentences than this. But really, it’ll be pretty short because who comes here to read paragraphs of text?</p>
            </div>
        </div>
    )
}

export default AboutMe