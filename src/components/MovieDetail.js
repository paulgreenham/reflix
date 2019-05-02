import React, { Component } from 'react'

import '../style/moviedetail.css'

class MovieDetail extends Component {

    getMovie = () => this.props.movies.find(m => m.id === parseInt(this.props.match.params.id))

    render(){
        const movie = this.getMovie()
        return (<div>
            <div className="title">{movie.title} ({movie.year})</div>
            <div className="movie-image"><img src={movie.img} alt=""/></div>
            <div className="description">{movie.descrShort}</div>
        </div>)
    }
}

export default MovieDetail