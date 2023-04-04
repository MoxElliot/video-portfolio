import React from 'react';
import Table from 'react-bootstrap/Table';

const statsArr = [{year:'2019', games:'99', points:'888', rebounds:'888', assists:'888', two_field_goal_percent: '50%', three_field_goal_percent:'50%', free_throw_percent:'80%', effetive_field_goal_percent:'45%'},
{year:'2020', games:'99', points:'888', rebounds:'888', assists:'888', two_field_goal_percent: '50%', three_field_goal_percent:'50%', free_throw_percent:'80%', effetive_field_goal_percent:'45%'},
{year:'2021', games:'99', points:'888', rebounds:'888', assists:'888', two_field_goal_percent: '50%', three_field_goal_percent:'50%', free_throw_percent:'80%', effetive_field_goal_percent:'45%'}]

const statsHeadArr = [['Year','Yr'], ['Games','G'], ['Points','PTS'], ['Total Rebounds','TRB'], ['Assists', 'AST'], ['Field Goal %', 'FG%'], ['3-Point Field Goal %', 'FG3%'], ['Free Throw %', 'FT%'], ['Effective Field Goal %', 'eFG%']]


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
                            <td>{data.assists}</td>
                            <td>{data.two_field_goal_percent}</td>
                            <td>{data.three_field_goal_percent}</td>
                            <td>{data.free_throw_percent}</td>
                            <td>{data.effetive_field_goal_percent}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Statistics