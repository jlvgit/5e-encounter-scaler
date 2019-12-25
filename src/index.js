import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './creatures.json'
import M from 'materialize-css';
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
        encounterList: []
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
        if (this.state.encounterList.indexOf(newEntry) === -1) {
            this.setState({ encounterList: [...this.state.encounterList, newEntry] })
        } else {
            M.toast({html: 'Already exists in Encounter!', displayLength: 500})
        }
    }

    removeFromEncounter = (newEntry) => {
        let filteredArray = this.state.encounterList.filter(item => item !== newEntry)
        this.setState({encounterList: filteredArray});
    }

    render() {
        return(
                <div className="row">
                    <div className="col s6">
                        <SearchBar keywords={this.getFilteredResultsByKeyword}/>
                        <CreatureList 
                            list={this.showFilterResults(this.state.filtered)}
                            encounter={this.state.encounterList} 
                            add={this.addToEncounter}
                            remove={this.removeFromEncounter}
                        />
                    </div>
                    <div className="col s6">
                        <Encounter encounter={this.state.encounterList}/>
                    </div>
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))