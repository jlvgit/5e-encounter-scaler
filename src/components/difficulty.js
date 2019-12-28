import React from 'react';

//Data needed
import DIFFICULTY from '../data/difficulty_chart.json'

const EncounterDifficulty = (props) => {

        const threshold = DIFFICULTY[props.playerLevel]

        const easy   = threshold.Easy   * props.players
        const medium = threshold.Medium * props.players
        const hard   = threshold.Hard   * props.players
        const deadly = threshold.Deadly * props.players

        const getDifficulty = (encounterXP) => {
            if (encounterXP < easy && encounterXP > 0) {
                return "Trivial"
            } else if (encounterXP >= easy && encounterXP < medium) {
                return "Easy"
            } else if (encounterXP >= medium && encounterXP < hard) {
                return "Medium"
            } else if (encounterXP >= hard && encounterXP < deadly) {
                return "Hard"
            } else if (encounterXP >= deadly && encounterXP < deadly * 2) {
                return "Deadly"
            } else if (encounterXP >= deadly * 2) {
                return `${Math.round( encounterXP/deadly * 10 ) / 10}x more than Deadly`
            }
        }

        return(
                <div>Difficulty for {props.players} players: {getDifficulty(props.encounterXP)}</div>
            )
}

export default EncounterDifficulty;