import React from 'react';

class SearchBar extends React.Component {
    state = {searchTerm: ''};

    onSearchBarChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmitForm(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchTerm} 
                            onChange={this.onSearchBarChange}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;