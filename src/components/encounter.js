import React, { Component } from 'react';

//COMPONENTS
import PartyMembers from './party_members'
import EncounterXP from './encounter_xp';

class Encounter extends Component {

        state = {
            monsters: this.props.encounter,
            players: 1,
            playerLevel: 1
        }

        setPlayers     = (event) => { this.setState({players:event.target.value}) }
        setPlayerLevel = (event) => { this.setState({playerLevel:event.target.value}) }


        render() {
            const encounterCreatures = this.props.encounter.map( (creature) => {
                return <div key={creature.name}>{creature.name} x {creature.count}</div>
            });

            return(
                <div className='encounter'>
                    <PartyMembers setPlayers={this.setPlayers}/>
                    <h5>Encounter</h5>
                    {encounterCreatures}
                </div>
        )
    }
}

export default Encounter;