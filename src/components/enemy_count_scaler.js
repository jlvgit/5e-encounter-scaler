import React from 'react';
import { Range } from 'react-materialize';

const EnemyCountScaler = (props) => {

        const baseXpForFourPlayers = `${props.getXP(props.monsters, 4)}`
        const calculatedXp = `${props.getXP(props.monsters, props.players)}`

        const calculateNewXp = (event) => {
            console.log(event.target.value)
        }

        const enemies = props.monsters.map((monster) => {
            return (
                <div key={monster.name}>            
                    <label>{monster.name}</label>
                    <Range  max="30" min="0" name="enemies" defaultValue={monster.count} onChange={calculateNewXp}/>
                </div>
            )
        }) 

        return(
                <div>
                    <strong>Adding/Remove enemies</strong>
                    {enemies}
                </div>
            )
}

export default EnemyCountScaler;