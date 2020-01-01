import React, { Component } from 'react';
import { Range } from 'react-materialize';

class EnemyCountScaler extends Component {

        state = {
            calculatedXp: 0
        }
    
        calculateNewXp = (event, creature) => {
            let list = this.props.monsters
            const result = list.find( ({ name }) => name === creature.name );
            const oldCount = result.count
            result.count = parseInt(event.target.value)
            this.setState({
                calculatedXp: this.props.getXP(list, this.props.players)
            })
            result.count = oldCount
        }

        getEnemySliders = () => {
            let enemies = this.props.monsters.map((monster) => {
                return (
                    <div key={monster.name}> 
                        <Range 
                            label={monster.name}
                            max="20" min="0" 
                            name="enemies" 
                            defaultValue="0"
                            onChange={(e) => this.calculateNewXp(e, monster)}/>
                    </div>
                )
            }) 
            return enemies
        }

        render(){

            return(
                <div>
                    <strong>Add/Remove enemies</strong>
                    <div>XP for {this.props.players} players: <span className='newxp'>{this.state.calculatedXp} {this.props.difficulty(this.state.calculatedXp)}</span></div>
                    <div>{this.getEnemySliders()}</div>
                </div>
            )
        }
}

export default EnemyCountScaler;