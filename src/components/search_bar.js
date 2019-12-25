import React, { Component } from 'react';

class SearchBar extends Component {

    render(){
        console.log(this.props.keywords)
        return(
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate"/>
                    <label htmlFor="icon_prefix">Search</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;