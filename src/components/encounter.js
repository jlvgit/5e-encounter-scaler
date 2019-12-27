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
                    <div className='encounter-title'>
                        <h5>Encounter</h5>
                        <span className="btn-flat" onClick={this.props.clearEncounter}>Clear</span>
                    </div>
                    <div className='col s6'>
                        {encounterCreatures}    
                    </div>
                    <div className='col s6'>
                        <EncounterXP 
                            monsters={[this.props.encounter]} 
                            players={this.props.players}
                            playerLevel={this.props.playerLevel}/>
                    </div>
                </div>
        )
    }
}

export default Encounter;