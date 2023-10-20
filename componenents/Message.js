import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Vistor'
        }
    }

    render() {
        return (
            <div>
                <h1>
                {this.state.message}
            </h1>
            <button>Press</button>
            </div>
        )
    }
}

export default Message