import React, { Component } from "react";

class AddCart extends Component {
    state = {
        count: 0,
        name :"suvathi"
    }
    handleclick = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handlename = () => {
        this.setState({name:"siva"})
    }

    render() {
        return (
            <>
                <h1>AddCart</h1>
                <h2>count : {this.state.count}</h2>
                <h2>name : {this.state.name}</h2>

                <button onClick={this.handleclick}>Add</button>
                <button onClick={this.handlename}>Name</button>
            </>
        )
    }
}

export default AddCart
