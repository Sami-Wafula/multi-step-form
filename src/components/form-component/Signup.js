import React, { Component } from "react";
import UserInformation from './UserInformation';
import OtherInformation from './OtherInformation';
import Confirmation from './Confirmation';
import Success from './Success';

export default class Signup extends Component {

    previousStep = () => {
        const { step } = this.state.step;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state.step;
        this.setState({ step: step + 1});
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state.step;
        const { username, email, password, country, sex, age } = this.state;
        const values = { username, email, password, country, sex, age }

        switch (step) {
            case 1:
                return (
                    <UserInformation 
                    nextStep = { this.nextStep }
                    handleChange= { this.handleChange }
                    values = { values }
                    />
                )
            case 2:
                return (
                    <OtherInformation 
                    previousStep = { this.previousStep}
                    nextStep = { this.nextStep }
                    handleChange= { this.handleChange }
                    values = { values }
                    />
                )
            case 3:
                return (
                    <Confirmation
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    values = { values } 
                    />
                )
            case 4:
                return (
                    <Success />
                )
            default:
        }
    }
}