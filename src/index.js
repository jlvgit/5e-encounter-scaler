import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './creatures.json'
import './index.css';

//COMPONENTS
import CreatureList from './components/creature_list'
import SearchBar from './components/search_bar'
import PartyMembers from './components/party_members'
import Encounter from './components/encounter'


class App extends Component {

    state = {
        searchTerm: '',
        monsterList: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        let keyword = event.target.value.toLowerCase()
        let filtered = this.state.monsterList.filter((monster) => {
            return monster.name.toLowerCase().indexOf(keyword) > -1
        });

        this.setState({
            filtered
        })

        this.setState({
            searchTerm:keyword
        })
    }

    showFilterResults = (filteredResults) => {
        if (filteredResults.length === 0 && this.state.searchTerm.length > 0){
            return [];
        } else if (filteredResults.length > 0){
            return this.state.filtered;
        } else {
            return this.state.monsterList;
        }

    }

    render() {
        return(
                <div className="row">
                    <div className="col s6">
                        <SearchBar keywords={this.getKeyword}/>
                        <CreatureList list={this.showFilterResults(this.state.filtered)}/>
                    </div>
                    <div className="col s6">
                        <PartyMembers/>
                        <Encounter/>
                    </div>
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))