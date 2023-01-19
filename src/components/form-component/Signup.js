import React, { Component } from "react";

export default class Signup extends Component {

    previousStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1});
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
    
        const { username, email, password, country, sex, age } = this.state;

        const values = { username, email, password, country, sex, age }
        
        return (
            <div>
                <h1>Welcome, please provide some information to get started</h1>
            </div>
        )
    }
}