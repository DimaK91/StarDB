// import React from 'react';
// import ReactDOM from 'react-dom/client';

class SwapService {

    _apiBase = 'https://swapi.dev/api';

    async getResource (url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople () {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson (id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets () {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getPlanet (id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships () {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getStarship (id) {
        return this.getResource(`/starships/${id}/`);
    }
}

const swap = new SwapService();

swap.getPerson(3).then((p) => {
        console.log(p.name)
});





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render();



