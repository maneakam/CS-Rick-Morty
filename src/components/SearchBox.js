import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.keywordRef = React.createRef();
        this.setSearchKeywordValue = this.setSearchKeywordValue.bind(this);
    }

    setSearchKeywordValue(event) {
        event.preventDefault();
        const keyword = this.keywordRef.valueOf().current.value;
        this.props.filtersData.name = keyword;
        this.keywordRef.valueOf().current.value = "";
        this.props.getFilteredData();
    }

    render () {
        return (
            <div className="search-wrap">
                <h3 className="form-legend">Search By name</h3>
                <form className="search-box" onSubmit={this.setSearchKeywordValue}>
                    <input ref={this.keywordRef} type="search" />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;
