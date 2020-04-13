import React from 'react';

class SortBox extends React.Component {
    render () {
        return (
            <div className="sort-box">
                <label className="sort-by" >Sort By:</label>
                <select onChange={this.props.sortCharacters}>
                    <option value="ascending">Ascending</option>
                    <option value="decending">Decending</option>
                </select>
            </div>
        );
    }
}

export default SortBox;
