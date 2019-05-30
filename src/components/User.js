import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../style/user.css'

class User extends Component {

    sendUserId = async () => {
        await this.props.setUser(this.props.user.id)
    }

    render(){
        let user = this.props.user
        return (
            <Link to='/catalog' className="user-box" onClick={this.sendUserId} style={{backgroundColor: user.backgroundColor}}>
                <i className={`fas ${user.icon}`}></i>
                {user.name}
            </Link>
        )
    }
}

export default User