import React from 'react';

//Data needed
import DIFFICULTY from '../data/difficulty_chart.json'

const EncounterDifficulty = (props) => {

        const threshold = DIFFICULTY[props.playerLevel]

        const easy   = threshold.Easy   * props.players
        const medium = threshold.Medium * props.players
        const hard   = threshold.Hard   * props.players
        const deadly = threshold.Deadly * props.players

        const getDifficultyByPlayerLevel = (encounterXP) => {
            if (encounterXP < easy && encounterXP > 0) {
                return "Trivial"
            } else if (encounterXP >= easy && encounterXP < medium) {
                return "Easy"
            } else if (encounterXP >= medium && encounterXP < hard) {
                return "Medium"
            } else if (encounterXP >= hard && encounterXP < deadly) {
                return "Hard"
            } else if (encounterXP >= deadly && encounterXP < deadly*3) {
                return "Deadly"
            } else if (encounterXP >= deadly * 3) {
                return "More than 3x Deadly"
            }
        }

        return(
                <div>Difficulty for {props.players} players: {getDifficultyByPlayerLevel(props.encounterXP)}</div>
            )
}

export default EncounterDifficulty;