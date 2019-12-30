import React from 'react'
import STATS from '../data/stats_by_cr.json'
import { Button } from 'react-materialize';


const Creature = (props) => {

    const creatureStats = (crToFind) => {
        let obj = STATS.find(data => data.CR === crToFind);
        return obj
    }

    return (
        <tr>
            <td>{props.creature.name}</td>
            <td>{props.creature.CR}</td>
            <td>{props.creature.creature_size}</td>
            <td>
                <Button className="add-button blue-grey" waves='light' small={true} onClick={() => {
                        props.creature.count = props.creature.count || 0 ;
                        props.creature.count += 1;
                        props.creature.stats = creatureStats(props.creature.CR)
                        props.add(props.creature);
                    }}
                >+</Button>

                <Button className="subtract-button blue-grey" waves='light' small={true} onClick={() => {
                        if (props.creature.count > 0){
                            props.creature.count -= 1;
                        }
                        props.remove(props.creature)
                    }}
                >-</Button>
            </td>
        </tr>
    )
}

export default Creature;
