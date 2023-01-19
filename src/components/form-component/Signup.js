import React, { Component } from "react";

export default class Signup extends Component {

    state = {
        step: 1,
        username: '',
        email: '',
        password: '',
        country: '',
        sex: '',
        age: ''
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1})
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Welcome, please provide some information to get started</h1>
            </div>
        )
    }
}