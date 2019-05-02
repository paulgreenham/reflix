import React, { Component } from 'react'
import Movie from './Movie'

import '../style/catalog.css'

class Catalog extends Component {

    getRentedMovies = () => this.props.state.movies.filter(m => m.isRented)

    render(){
        let rented = this.props.user.rentedMovies
        let allMovies = this.props.movies
        let budget = this.props.user.budget
        console.log()
        return (<div id="catalog-container">

            <div className="header">
                <input className="search-bar" type="text" placeholder="Search"/>
                <div id="budget">${budget}</div>
            </div>

            {rented.length > 0 ?
            <div id="rented">
                <h5>Rented:</h5>
                <div className="movies">{rented.map(m => <Movie movie={m} key={"r" + m.id} changeRentStatus={this.props.changeRentStatus} />)}</div>
                <hr/>
            </div> : null}

            <div id="catalog">
                <h5>Catalog:</h5>
                <div className="movies">{allMovies.map(m => <Movie movie={m} key={m.id} changeRentStatus={this.props.changeRentStatus} />)}</div>
            </div>

        </div>)
    }
}

export default Catalog