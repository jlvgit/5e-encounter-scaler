import React from 'react'

const Creature = ({creature}) => {
    return (
        <tr>
            <td>{creature.name}</td>
            <td>{creature.CR}</td>
            <td>{creature.creature_size}</td>
            <td><button className="add-button waves-effect waves-light btn-small blue-grey">+</button>
            <button className="subtract-button waves-effect waves-light btn-small blue-grey">-</button></td>
        </tr>
    )
}

export default Creature;
