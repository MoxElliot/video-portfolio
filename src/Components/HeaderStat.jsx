import React from 'react';

const HeaderStat = (props) => {
    return (
        <div className='single-stat'>
            <p className="statnum">{props.statNum}</p>
            <p className="stattype">{props.statType}</p>
        </div>
    )
}

export default HeaderStat;