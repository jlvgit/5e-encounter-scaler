import React from 'react';

//COMPONENTS
import Creature from './creature'

// inputChangeHandler = (event) => {
//     console.log(event.target.value)
//     this.setState({
//         keywords: event.target.value
//     })
// }


const CreatureList = (props) => {

        const creatures = props.list.map((creature) => {
            return (
                <Creature key={creature.name} creature={creature}/>
            )
        });

        return(
            <div className="row">
                <div className="input-field col s6">
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
            </div>
        )
    } 


export default CreatureList;