import React, { Component } from 'react';

//Data needed
import DIFFICULTY from '../data/difficulty_chart.json'

//COMPONENTS
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

        getDifficulty = (encounterXP) => {
            const threshold = DIFFICULTY[this.props.playerLevel]
            let difficulty = ''

            const easy   = threshold.Easy   * this.props.players
            const medium = threshold.Medium * this.props.players
            const hard   = threshold.Hard   * this.props.players
            const deadly = threshold.Deadly * this.props.players
    
            if (encounterXP < easy && encounterXP > 0) {
                difficulty = "Trivial"
            } else if (encounterXP >= easy && encounterXP < medium) {
                difficulty = "Easy"
            } else if (encounterXP >= medium && encounterXP < hard) {
                difficulty = "Medium"
            } else if (encounterXP >= hard && encounterXP < deadly) {
                difficulty = "Hard"
            } else if (encounterXP >= deadly && encounterXP < deadly * 2) {
                difficulty = "Deadly"
            } else if (encounterXP >= deadly * 2) {
                difficulty = `${Math.round( encounterXP/deadly * 10 ) / 10}x more than Deadly`
            }

            if (encounterXP === 0) {
                return ''
            } else {
                return difficulty
            }
        }

        render(){
            let encounterXP = this.getXpTotalForEncounter(this.props.monsters[0], this.props.players)
            let fourPlayerEncounterXP = this.getXpTotalForEncounter(this.props.monsters[0], 4)
        
            return(
                <div>
                    <div><strong>Player Level: {this.props.playerLevel}</strong></div>

                    <div className='col s6'>
                        <div>Encounter XP for 4 players: {fourPlayerEncounterXP}</div>
                        <div>Difficulty for 4 players: {this.getDifficulty(fourPlayerEncounterXP)}</div>
                    </div>
                    <div className='col s6'>
                        <div>Encounter XP for {this.props.players} players: {encounterXP}</div>
                        <div>Difficulty for {this.props.players} players: {this.getDifficulty(encounterXP)}</div>
                    </div>                    
                    <hr></hr>
                    <div>
                        <h5 className='adjustment-title'>Adjustment Options</h5>
                        <EnemyCountScaler 
                            getXP={this.getXpTotalForEncounter} 
                            difficulty={this.getDifficulty}
                            monsters={this.props.monsters[0]}
                            players={this.props.players}/>
                    </div>
                </div>
            )
        }
}

export default EncounterXP;