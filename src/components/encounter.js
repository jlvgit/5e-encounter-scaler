import React, { Component } from 'react';

//COMPONENTS
import PartyMembers from './party_members'
import { create } from 'domain';

class Encounter extends Component {

        render() {
            const encounterCreatures = this.props.encounter.map( (creature) => {
                return <div key={creature.name}>{creature.name} - CR {creature.CR}</div>
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