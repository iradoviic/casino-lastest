import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import './FormUserDate.css'


export default class FormUserDate extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }



    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="form">
                <MuiThemeProvider>
                    <React.Fragment>
                        <br />
                        <TextField
                            hint="Enter your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.fistName}
                        />
                        <br />
                        <TextField
                            id="filled-basic"
                            hint="Enter your Last Name"
                            label="Last Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.fistName}
                        />

                        <br />
                        <TextField
                            hint="Enter your First Name"
                            label="Email"
                            onChange={handleChange('firstName')}
                            defaultValue={values.fistName}
                        />

                        <br />
                        <button className="btn"
                            onClick={this.continue}>
                            CONTINUE
                            </button>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }

}

