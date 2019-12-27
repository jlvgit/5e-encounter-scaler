import React, { Component } from 'react';
import STATS from '../data/stats_by_cr.json'

class EncounterXP extends Component {

        componentDidUpdate(){
            // console.log(this.getXpTotalForEncounter())
        }

        findStats = (crToFind) => {
            let obj = STATS.find(data => data.CR === crToFind);
            return obj
        }

        getXpTotalForCreature = (creature) => {
            let statsForCreature = this.findStats(creature.CR);
            let xp = statsForCreature.XP * creature.count
            return xp
        }

        getXpMultiplier = (count) => {
            if (count === 2) {
                return 1.5
            } else if (count >= 3 && count <= 6 ){
                return 2
            } else if (count >= 7 && count <= 10 ) {
                return 2.5
            } else if (count >= 11 && count <= 14 ) {
                return 3
            } else if (count >= 15 ) {
                return 4
            } else {
                return 1
            }
        }

        getXpTotalForEncounter = () => {
            const monsters = this.props.monsters[0]
            let xpTotal = 0
            let countTotal = 0
            monsters.forEach(creature => {
                countTotal = countTotal + creature.count
                xpTotal    = xpTotal + this.getXpTotalForCreature(creature)
            });
            xpTotal = xpTotal * this.getXpMultiplier(countTotal)
            return xpTotal
        }

        render(){
            return(
                <div>
                    Encounter XP: {this.getXpTotalForEncounter()}
                </div>
            )
        }
}

export default EncounterXP;