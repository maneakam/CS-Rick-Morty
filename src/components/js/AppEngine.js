import AppService from './AppService';

const AppEngine = {
    init: function () {
        const API = "https://rickandmortyapi.com/api/character/";
        return AppService(API);
    }
}

export default AppEngine;
