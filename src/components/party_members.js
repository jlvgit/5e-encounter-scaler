import React from 'react';

const PartyMembers = (props) => {
        return(
            <div className='party'>
                <h5>Party Members</h5>
                <div className='row'> 
                    <div className="input-field col s4">
                        <input placeholder="4" min="1" max="10" id="partyNum" type="number" className="validate" onChange={props.setPlayers}/>
                        <label htmlFor="partyNum">Number of characters:</label>
                        <span className="helper-text" data-error="Must be a number between 1 and 10"></span>
                    </div>
                    <div className="input-field col s4">
                        <input placeholder="1" min="1" max="20" id="partyLevel" type="number" className="validate" onChange={props.setPlayerLevel}/>
                        <label htmlFor="partyLevel">Average character level:</label>
                        <span className="helper-text" data-error="Must be a number between 1 and 20"></span>
                    </div>
                </div>
                
            </div>
        )
}

export default PartyMembers;