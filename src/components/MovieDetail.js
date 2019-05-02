import React, { Component } from 'react'

class MovieDetail extends Component {
    render(){
        return (<div>
            {this.match.params}
            {this.props.movies}
        </div>)
    }
}

export default MovieDetail