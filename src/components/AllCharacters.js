import React from 'react';
import Characters from './Characters';

class AllCharacters extends React.Component {
    constructor(props) {
        super();
    }
    render () {
        return (
            <div className="all-characters">
                {
                    this.props && 
                    this.props.characterData && 
                    this.props.characterData.map((character, index) => {
                        return <Characters character={character} key={index} />
                    })
                }
            </div>
        );
    }
}

export default AllCharacters;
