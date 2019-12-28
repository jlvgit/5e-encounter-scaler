import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './data/creatures.json'
import './index.css';

//COMPONENTS
import CreatureList from './components/creature_list'
import SearchBar from './components/search_bar'
import Encounter from './components/encounter'


class App extends Component {

    state = {
        searchTerm: '',
        monsterList: JSON,
        filtered: [],
        encounterList: [],
        players: 1,
        playerLevel: 1
    }

    getFilteredResultsByKeyword = (event) => {
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

    addToEncounter = (newEntry) => {
        this.setState({ encounterList: [...this.state.encounterList, newEntry] })
        if (this.state.encounterList.indexOf(newEntry) === -1) {
            this.setState({ encounterList: [...this.state.encounterList, newEntry] })
        } else {
            this.setState({ encounterList: this.state.encounterList })
        }
    }

    removeFromEncounter = (newEntry) => {
        let filteredArray;
        if (newEntry.count === 0){
            filteredArray = this.state.encounterList.filter(item => item !== newEntry)
        } else {
            filteredArray = this.state.encounterList
        }
        this.setState({encounterList: filteredArray});
    }

    clearEncounter = () => { this.setState({encounterList: []})}

    setPlayers = (event) => {
        if (event.target.value >=1 && event.target.value < 10) {
            this.setState({players:event.target.value}) 
        }
    }

    setPlayerLevel = (event) => {
         if (event.target.value >=1 && event.target.value < 20) {
             this.setState({playerLevel:event.target.value}) 
        }
    }

    render() {
        return(
                <div className="row">
                    <div className="col s6">
                        <SearchBar keywords={this.getFilteredResultsByKeyword}/>
                        <CreatureList 
                            list      = {this.showFilterResults(this.state.filtered)}
                            encounter = {this.state.encounterList} 
                            add       = {this.addToEncounter}
                            remove    = {this.removeFromEncounter}
                        />
                    </div>
                    <div className="col s6">
                        <Encounter 
                            encounter      = {this.state.encounterList} 
                            clearEncounter = {this.clearEncounter}
                            setPlayers     = {this.setPlayers} 
                            setPlayerLevel = {this.setPlayerLevel}
                            players        = {this.state.players}
                            playerLevel    = {this.state.playerLevel}/>
                    </div>
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))