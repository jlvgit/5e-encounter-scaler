import React from 'react'

const Creature = (props) => {
    return (
        <tr>
            <td>{props.creature.name}</td>
            <td>{props.creature.CR}</td>
            <td>{props.creature.creature_size}</td>
            <td>
                <button className="add-button waves-effect waves-light btn-small blue-grey" onClick={() => {
                        props.creature.count = props.creature.count || 0 ;
                        props.creature.count += 1;
                        props.add(props.creature);
                    }}
                    >+
                </button>

                <button className="subtract-button waves-effect waves-light btn-small blue-grey" onClick={() => {
                        if (props.creature.count > 0){
                            props.creature.count -= 1;
                        }
                        props.remove(props.creature)
                    }}
                    >-
                </button>
            </td>
        </tr>
    )
}

export default Creature;
