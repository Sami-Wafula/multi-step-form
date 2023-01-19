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

    render() {
        return (
            <div>
                <h1>Welcome, please provide some information to get started</h1>
            </div>
        )
    }
}