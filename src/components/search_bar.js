import React from 'react';

const SearchBar = (props) => {
        return(
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input id="icon_prefix" type="text" className="validate" onChange={props.keywords}/>
                        <label htmlFor="icon_prefix">Search</label>
                    </div>
                </div>
            </form>
        )
}

export default SearchBar;