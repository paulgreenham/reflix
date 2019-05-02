import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../style/user.css'

class User extends Component {

    sendUserId = () => {
        this.props.getUserId(this.props.user.id)
    }

    render(){
        let user = this.props.user
        return (
            <Link to='/catalog' className="user-box" onClick={this.sendUserId} style={{backgroundColor: user.backgroundColor}}>
                {user.name}
            </Link>
        )
    }
}

export default User