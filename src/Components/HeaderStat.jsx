import React from 'react';

const HeaderStat = (props) => {
    return (
        <div className='single-stat'>
            <h2 className="statnum">{props.statNum}</h2>
            <p className="stattype">{props.statType}</p>
        </div>
    )
}

export default HeaderStat;