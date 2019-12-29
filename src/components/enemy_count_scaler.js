import React from 'react';

const EnemyCountScaler = (props) => {

        const baseXpForFourPlayers = `${props.getXP(props.monsters, 4)}`
        const calculatedXp = `${props.getXP(props.monsters, props.players)}`

        const adjustEnemyCount = () => {
            return "nothing here yet"
        }

        return(
                <div>
                    <strong>Adding/Remove enemies</strong>
                    {adjustEnemyCount()}
                </div>
            )
}

export default EnemyCountScaler;