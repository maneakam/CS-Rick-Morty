import React from 'react';

class Characters extends React.Component {
    constructor(props){
        super();
    }
    calculateIDCreationDate(creationDate) {
        return ((new Date() - new Date(creationDate)) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
    }
    render () {
        const {
            name, 
            image,
            id, 
            status, 
            gender, 
            species, 
            origin,
            created,  
            location
        } = this.props.character;
        return (
            <div className="character">
                <div className="image-holder">
                    <img className="img-character" src={image} alt={name} />
                    <div className="details-box">
                        <p className="name">{name}</p>
                        <p className="id">ID: {id}  - Created {this.calculateIDCreationDate(created)} years ago</p>
                    </div>
                </div>
                <p className="item-details">
                    <span className="title">Status</span>
                    <span className="description">{status}</span>
                </p>
                <p className="item-details">
                    <span className="title">Species</span>
                    <span className="description">{species}</span>
                </p>
                <p className="item-details">
                    <span className="title">Gender</span>
                    <span className="description">{gender}</span>
                </p>
                <p className="item-details">
                    <span className="title">Origin</span>
                    <span className="description">{origin.name}</span>
                </p>
                <p className="item-details">
                    <span className="title">Last Location</span>
                    <span className="description">{location.name}</span>
                </p>
            </div>
        );
    }
}

export default Characters;
