import React, { Component } from 'react'
import User from './User'

import '../style/landing.css'

class Landing extends Component {
    constructor () {
        super()
        this.state = {
            // currentUserId: "",
            // users: {
            //     "p1001" : {
            //         name: "Paul",
            //         budget: 20,
            //         rentedMovies: [],
            //         backgroundColor: "red"
            //     },
            //     "c1002" : {
            //         name: "Char",
            //         budget: 20,
            //         rentedMovies: [],
            //         backgroundColor: "green"
            //     },
            //     "s1003" : {
            //         name: "Sofia",
            //         budget: 10,
            //         rentedMovies: [],
            //         backgroundColor: "yellow"
            //     },
            //     "n1004" : {
            //         name: "Naomi",
            //         budget: 10,
            //         rentedMovies: [],
            //         backgroundColor: "blue"
            //     }
            // }
        }
    }

    
    render(){
        const users = this.props.users
        return (<div id="landing">
            <div id="message">Who's Watching?</div>
            <div id="user-display">
                {users.map(u => 
                    <User key={u.id} user={u} getUserId={this.props.getUserId}/>
                )}
            </div>
        </div>)
    }
}

export default Landing