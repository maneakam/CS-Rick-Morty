import React from 'react';

class FilterBox extends React.Component {
    removeFilter(params) {
        params.props.filtersData[this] = "";
        params.props.getFilteredData();
    }
    
    render() {
        return(
            <div className="filtered-items-box clearfix">
                <h2 className="sub-heading">Filter:</h2>
                <ul className="filtered-items">
                    {
                        Object.keys(this.props.filtersData).map((filter, index) => {
                            return !!this.props.filtersData[filter] && <li key={index}>
                                <button onClick={this.removeFilter.bind(filter, this)} className="filter-btn" title={`Remove filter for ${filter}`}>{filter} :
                                    <span className="filter-value"> {this.props.filtersData[filter]}</span>
                                </button>
                            </li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default FilterBox;
