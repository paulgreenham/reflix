import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../style/movie.css'



class Movie extends Component {

    changeRentStatus = () => {
        this.props.changeRentStatus(this.props.movie.id)
    }

    render(){
        return (<div className="movie-image">
            <Link to={`/movies/${this.props.movie.id}`}><img className="title-pic" src={this.props.movie.img} alt={this.props.movie.title}/></Link>
            {this.props.movie.isRented ?
            <i className="fas fa-minus-circle" onClick={this.changeRentStatus}></i> : 
            <i className="fas fa-plus-circle" onClick={this.changeRentStatus}></i>}
        </div>)
    }
}

export default Movie