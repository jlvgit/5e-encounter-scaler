import React from 'react';

//COMPONENTS
import Creature from './creature'

const CreatureList = (props) => {

        const creatures = props.list.map((creature) => {
            return (
                <Creature key={creature.name} creature={creature}/>
            )
        });

        return(
            <div className="row">
                    <table className='list'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>CR</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {creatures}
                        </tbody>
                    </table>
            </div>
        )
    } 


export default CreatureList;