import React, { Component } from 'react'
import Movie from './Movie'

import '../style/catalog.css'

class Catalog extends Component {
    constructor () {
        super ()
        this.state = {
            searchObject : ""
        }
    }

    getRentedMovies = movies => movies.filter(m => m.isRented)

    getSearchedMovies = (movies) => {
        return movies.filter(m => m.title.toLowerCase().includes(this.state.searchObject.toLowerCase()))
    }

    updateSearchObject = event => {
        this.setState({
            searchObject: event.target.value
        })
    }

    renderMovies = movies => {
        return <div className="movies">{movies.map(m => <Movie movie={m} key={m.id} changeRentStatus={this.props.changeRentStatus} />)}</div>

    }

    render(){
        let allMovies = this.getSearchedMovies(this.props.movies)
        let rented = this.getRentedMovies(allMovies)
        let budget = this.props.user.budget
        return (<div id="catalog-container">

            <div className="header">
                <input className="search-bar" type="text" placeholder="Search" 
                    value={this.state.searchObject} onChange={this.updateSearchObject}/>
                <div id="budget">${budget}</div>
            </div>

            {rented.length > 0 ?
            <div id="rented">
                <h5>Rented:</h5>
                {this.renderMovies(rented)}
                <hr/>
            </div> : null}

            <div id="catalog">
                <h5>Catalog:</h5>
                {this.renderMovies(allMovies)}
            </div>

        </div>)
    }
}

export default Catalog