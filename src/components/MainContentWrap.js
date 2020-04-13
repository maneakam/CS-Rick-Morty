import React from 'react';
import FilterBox from './FilterBox';
import SearchBar from './SearchBar';
import AllCharacters from './AllCharacters';

class MainContentWrap extends React.Component {
    constructor(props) {
        super(props);
        this.charactersData = this.props.MainContentData.results;
        this.sortCharacters = this.sortCharacters.bind(this);
    }
    sortCharacters(event) {
        this.props.MainContentData.results = this.props.MainContentData.results.reverse();
        this.forceUpdate();
    }
    render () {
        return (
            <div className="content">
                <FilterBox 
                    getFilteredData={this.props.getFilteredData} 
                    filtersData={this.props.filtersData} 
                />
                {
                    <SearchBar 
                        getFilteredData={this.props.getFilteredData} 
                        filtersData={this.props.filtersData} 
                        sortCharacters={this.sortCharacters} 
                        charactersData={this.props.MainContentData.results} 
                    />
                }
                {
                    this.props && 
                    this.props.MainContentData && 
                    this.props.MainContentData.results && 
                    <AllCharacters 
                        characterData={this.props.MainContentData.results} 
                    />
                }
            </div>
        );
    }
}

export default MainContentWrap;