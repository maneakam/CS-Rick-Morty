import React from 'react';
import SideNavigation from './components/SideContentWrap';
import MainContentWrapper from './components/MainContentWrap';
import AppEngine from './components/js/AppEngine';
import AppService from './components/js/AppService';

class App extends React.Component {
    constructor(props) {
        super();

        this.filtersData = {
            "name": "",
            "gender": "",
            "species": "",
            "origin": ""
        };

        this.AppData = {};

        AppEngine.init().then(response => {
            return response.json();
        }).then(response => {
            this.AppData = response;
            this.forceUpdate();
        }).catch(error => {
            console.warn(error);
        });

        this.getFilteredData = this.getFilteredData.bind(this);
    }

    getFilteredData() {
        const API = "https://rickandmortyapi.com/api/character/";
        const context = this;
        const params = context.filtersData;

        AppService(API, params).then(response => {
            return response.json();
        }).then(response => {
            context.AppData.results = response.results;
            context.forceUpdate();
        }).catch(error => {
            console.warn(error);
        });
    }

    render() {
        return (
            <main className="app-wrapper clear-fix">
                <SideNavigation
                    getFilteredData={this.getFilteredData} 
                    filtersData={this.filtersData}
                />
                <MainContentWrapper
                    getFilteredData={this.getFilteredData} 
                    filtersData={this.filtersData} 
                    MainContentData={this.AppData} 
                />
            </main>
        );
    }
}

export default App;
