import React, { Component } from 'react'
import FormUserDate from './FormUserDate'
import FormPersonal from './FormPersonal';

export default class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        confpass: '',
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });

    }

    //previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });

    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, password, confpass, userName }
            = this.state;
        const values = { firstName, lastName, email, password, confpass, userName }

        switch (step) {
            case 1:
                return (
                    <FormUserDate
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonal
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return <h1>Success</h1>

        }
    }
}
