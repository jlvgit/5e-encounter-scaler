import React from 'react';

const EnemyCountScaler = (props) => {

        const baseXpForFourPlayers = props.getXP(props.monsters, 4)
        const calculatedXp = props.getXP(props.monsters, props.players)

        const adjustEnemyCount = (base, encounter, playerCount, monsters) => {
            if (base > encounter){
                let xpDiffs = []
                monsters.forEach((creature) => {
                    let newXp = encounter
                    let oldCount = creature.count
                    let newCount = 0
                    while (base > newXp) {
                        creature.count ++
                        newCount++
                        newXp = props.getXP(monsters, playerCount)
                    }
                    creature.count = oldCount
                    xpDiffs.push({xpDiff:newXp-base, name:creature.name, newCount: newCount})
                });
                return xpDiffs
            } else {
                return []
            }
            
        }

        const adjustments = adjustEnemyCount(baseXpForFourPlayers, calculatedXp, props.players, props.monsters)
        const showAdjustments = adjustments.map((creature) => {
            return (
                <div key={creature.name}> Add {creature.newCount}x {creature.name}</div>
            )
        })


        return(
                <div>
                    <strong>Adding/Removing enemies</strong>
                    {showAdjustments}
                </div>
            )
}

export default EnemyCountScaler;