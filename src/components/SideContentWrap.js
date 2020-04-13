import React from 'react';

class SideNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleOriginChange = this.handleOriginChange.bind(this);
        this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    }

    handleGenderChange(event) {
        this.props.filtersData.gender = event.target.value;
        this.props.getFilteredData();
    }

    handleOriginChange(event) {
        this.props.filtersData.origin = event.target.value;
        this.props.getFilteredData();
    }

    handleSpeciesChange(event) {
        this.props.filtersData.species = event.target.value;
        this.props.getFilteredData();
    }

    render () {
        return (
            <aside className="sidebar clearfix">
                <div className="heading-box">
                    <h2 className="sub-heading">Categories:</h2>
                </div>
                <div className="category-box">
                    <h3 className="category-title">Species</h3>
                    <ul className="filter-category">
                        <li>
                            <label>
                                <input type="radio" name="species" value="Human" checked={this.props.filtersData.species === "Human"} onChange={this.handleSpeciesChange} />
                                Human
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="species" value="Mytholog" checked={this.props.filtersData.species === "Mytholog"} onChange={this.handleSpeciesChange} />
                                Mytholog
                                </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="species" value="" checked={!this.props.filtersData.species} onChange={this.handleSpeciesChange} />
                                All
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="category-box">
                    <h3 className="category-title">Gender</h3>
                    <ul className="filter-category">
                        <li>
                            <label>
                                <input type="radio" name="gender" value="male" checked={this.props.filtersData.gender === "male"} onChange={this.handleGenderChange} />
                                Male
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="gender" value="female" checked={this.props.filtersData.gender === "female"} onChange={this.handleGenderChange} />
                                Female
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="gender" value="" checked={!this.props.filtersData.gender} onChange={this.handleGenderChange} />
                                All
                            </label>
                        </li>
                    </ul>
                </div>


                <div className="category-box">
                    <h3 className="category-title">Origin</h3>
                    <ul className="filter-category">
                        <li>
                            <label>
                                <input type="radio" name="origin" value="Earth" checked={this.props.filtersData.origin === "Earth"} onChange={this.handleOriginChange} />
                                Apocalyptic Earth
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="origin" value="Nuptia" checked={this.props.filtersData.origin === "Nuptia"} onChange={this.handleOriginChange} />
                                Nuptia
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="origin" value="Unknown" checked={this.props.filtersData.origin === "Unknown"} onChange={this.handleOriginChange} />
                                Unknown
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="origin" value="" checked={!this.props.filtersData.origin} onChange={this.handleOriginChange} />
                                All regions
                            </label>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SideNav;
