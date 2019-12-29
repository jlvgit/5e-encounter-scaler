import React, { Component } from 'react';

//COMPONENTS
import EncounterDifficulty from './difficulty'
import EnemyCountScaler from './enemy_count_scaler'

class EncounterXP extends Component {

        getXpTotalForCreature = (creature) => {
            let xp = creature.stats.XP * creature.count
            return xp
        }

        getXpMultiplier = (enemyCount, playerCount) => {
            const multipliers = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
            let multiplierIndex = 1

            if (enemyCount === 2) {
                multiplierIndex = 2
            } else if (enemyCount >= 3 && enemyCount <= 6 ){
                multiplierIndex = 3
            } else if (enemyCount >= 7 && enemyCount <= 10 ) {
                multiplierIndex = 4
            } else if (enemyCount >= 11 && enemyCount <= 14 ) {
                multiplierIndex = 5
            } else if (enemyCount >= 15 ) {
                multiplierIndex = 6
            } else {
                multiplierIndex = 1
            }

            if (playerCount < 3) {
                multiplierIndex += 1
            } else if (playerCount > 5 && enemyCount === 1) {
                multiplierIndex = 0
            } else if (playerCount > 5 && multiplierIndex > 1) {
                multiplierIndex -= 1
            } 

            return multipliers[multiplierIndex]
        }

        getXpTotalForEncounter = (monsters, players) => {
            let xpTotal = 0
            let countTotal = 0
            monsters.forEach(creature => {
                countTotal = countTotal + creature.count
                xpTotal    = xpTotal + this.getXpTotalForCreature(creature)
            });
            xpTotal = xpTotal * this.getXpMultiplier(countTotal, players)
            return xpTotal
        }

        render(){
            let encounterXP = this.getXpTotalForEncounter(this.props.monsters[0], this.props.players)
            let fourPlayerEncounterXP = this.getXpTotalForEncounter(this.props.monsters[0], 4)
        
            return(
                <div>
                    <div><strong>Player Level: {this.props.playerLevel}</strong></div>
                    <div>Encounter XP for 4 players: {fourPlayerEncounterXP}</div>
                    <EncounterDifficulty 
                        playerLevel={this.props.playerLevel}  
                        encounterXP={fourPlayerEncounterXP}
                        players={4}/>
                    <hr></hr>
                    <div>Encounter XP for {this.props.players} players: {encounterXP}</div>
                    <EncounterDifficulty 
                        playerLevel={this.props.playerLevel}
                        encounterXP={encounterXP}
                        players={this.props.players}/>
                    <h5>Adjustment Options</h5>
                    <EnemyCountScaler 
                        getXP={this.getXpTotalForEncounter} 
                        monsters={this.props.monsters[0]}
                        players={this.props.players}/>
                </div>
            )
        }
}

export default EncounterXP;