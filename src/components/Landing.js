import React, { Component } from 'react'
import User from './User'

import '../style/landing.css'

class Landing extends Component {
    
    render(){
        const users = this.props.users
        return (<div id="landing">
            <div id="message">Who's Watching?</div>
            <div id="user-display">
                {users.map(u => 
                    <User key={u.id} user={u} setUser={this.props.setUser}/>
                )}
            </div>
        </div>)
    }
}

export default Landing