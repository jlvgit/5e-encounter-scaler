import React, { Component } from 'react';

//COMPONENTS
import EncounterXP from './encounter_xp';
import { Collection, CollectionItem } from 'react-materialize';

class Encounter extends Component {

        render() {
            const encounterCreatures = this.props.encounter.map( (creature) => {
                return <CollectionItem key={creature.name}>{creature.name} x {creature.count}</CollectionItem>
            });

            return(
                <div className='encounter'>
                    <div className='encounter-title'>
                        <h5>Encounter</h5>
                        <span className="btn-flat" onClick={this.props.clearEncounter}>Clear</span>
                    </div>
                    <Collection>
                        {encounterCreatures}    
                    </Collection>
                    <div>
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