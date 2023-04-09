import React from 'react';
import Table from 'react-bootstrap/Table';

const statsArr = [{year:'2022', games:'30', points:'11.2', rebounds:'7.7', two_field_goal_percent: '57.1%', three_field_goal_percent:'30%', free_throw_percent:'82.3%'},]

const statsHeadArr = [['Year','Yr'], ['Games','G'], ['Points per Game','PTS/G'], ['Rebounds per Game','RB/G'], ['Field Goal %', 'FG%'], ['3-Point Field Goal %', 'FG3%'], ['Free Throw %', 'FT%']]


const Statistics = () => {
    return (
        <div className='statistics container p-0' id='statistics'>
            <div 
                className='section-divider' 
                style={{height:'10rem'}}
            />
            <h1>Statistics</h1>
            <Table 
                className='border'
                striped bordered hover variant='dark' size='sm'>
                <thead hover='true'> 
                    <tr>
                        {statsHeadArr.map((data, i)=> 
                            <th key={i} title={data[0]}>{data[1]}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {statsArr.map((data, i) => (
                        <tr key={i}>
                            <td>{data.year}</td>
                            <td>{data.games}</td>
                            <td>{data.points}</td>
                            <td>{data.rebounds}</td>
                            <td>{data.two_field_goal_percent}</td>
                            <td>{data.three_field_goal_percent}</td>
                            <td>{data.free_throw_percent}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Statistics