import React, { Component } from 'react';
import { Range } from 'react-materialize';

import CountSlider from './enemy_count_range_slider'

class EnemyCountScaler extends Component {

        state = {
            calculatedXp: ''
        }
    
        calculateNewXp = (event, creature) => {
            let oldCount = creature.count
            creature.count = event.target.value
            this.setState({
                calculatedXp: this.props.getXP(this.props.monsters, this.props.players)
            })
            creature.count = oldCount
        }

        getEnemySliders = () => {
            let enemies = this.props.monsters.map((monster) => {
                return (
                    <div key={monster.name}>            
                        <label>{monster.name}</label>
                        <Range  max="20" min="0" name="enemies" defaultValue={monster.count+1} onChange={(e) => this.calculateNewXp(e, monster)}/>
                    </div>
                )
            }) 
            return enemies
        }

        render(){

            return(
                <div>
                    <strong>Add/Remove enemies</strong>
                    <div>XP for {this.props.players} players: {this.state.calculatedXp}</div>
                    <div>{this.getEnemySliders()}</div>
                </div>
            )
        }
}

export default EnemyCountScaler;