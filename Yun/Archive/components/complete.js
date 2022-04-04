import React, { Component } from 'react'

class complete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: this.props.answer

        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.answer[0]}</h1>
                <h1>{this.state.answer[1]}</h1>
                <h1>{this.state.answer[2]}</h1>
            </div>
        );
    }
}

export default complete;
