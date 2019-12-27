import React, { Component } from 'react';

//COMPONENTS
import PartyMembers from './party_members'
import EncounterXP from './encounter_xp';

class Encounter extends Component {

        render() {
            const encounterCreatures = this.props.encounter.map( (creature) => {
                return <div key={creature.name}>{creature.name} x {creature.count}</div>
            });

            return(
                <div className='encounter'>
                    <PartyMembers 
                        setPlayers={this.props.setPlayers} 
                        setPlayerLevel={this.props.setPlayerLevel}/>
                    <h5>Encounter</h5>
                    {encounterCreatures}
                    <EncounterXP 
                        monsters={[this.props.encounter]} 
                        players={this.props.players}
                        playerLevel={this.props.playerLevel}/>
                </div>
        )
    }
}

export default Encounter;