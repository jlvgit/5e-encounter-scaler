import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './creatures.json'
import './index.css';

//COMPONENTS
import CreatureList from './components/creature_list'
import SearchBar from './components/search_bar'


class App extends Component {

    getKeyword = () => {
        console.log('hey')
    }

    render() {
        return(
            <div>
                <SearchBar keywords={this.getKeyword}/>
                <CreatureList list={JSON}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))