import React from 'react';
import SearchBox from './SearchBox';
import SortBox from './SortBox';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <SearchBox 
                    getFilteredData={this.props.getFilteredData} 
                    filtersData={this.props.filtersData}  
                />
                <SortBox 
                    sortCharacters={this.props.sortCharacters} 
                    charactersData={this.props.charactersData} 
                />
            </div>
        );
    }
}

export default SearchBar;
