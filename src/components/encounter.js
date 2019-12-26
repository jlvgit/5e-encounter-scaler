import React, { Component } from 'react';

//COMPONENTS
import PartyMembers from './party_members'

class Encounter extends Component {

        state = {
            monsters: this.state.encounter,
            players: 0,
            playerLevel: 1
        }

        render() {
            const encounterCreatures = this.props.encounter.map( (creature) => {
                return <div key={creature.name}>{creature.name} x {creature.count}</div>
            });

            return(
                <div className='encounter'>
                    <PartyMembers/>
                    <h5>Encounter</h5>
                    {encounterCreatures}
                </div>
        )
    }
}

export default Encounter;