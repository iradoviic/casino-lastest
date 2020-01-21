import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';

export default class FormPersonal extends Component {

    state = {
        loading: false
    }

    fetchData = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            //Faking API call

            this.setState({ loading: false });
        }, 4000)
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { loading } = this.state;
        const { values, handleChange } = this.props;
        return (

            <div className="form">
                <MuiThemeProvider>
                    <React.Fragment>
                        <br />
                        <TextField
                            hint="Enter your Username"
                            label="Username"
                            onChange={handleChange('userName')}
                            defaultValue={values.userName}
                        />
                        <br />
                        <TextField
                            type="password"
                            hint="Enter password"
                            label="Password"
                            onChange={handleChange('password')}
                            defaultValue={values.password}
                        />
                        <br />

                        <TextField
                            type="password"
                            hint="Repeat the same password"
                            label="Confirm the password"
                            onChange={handleChange('confPass')}
                            defaultValue={values.confPass}
                        />
                        <div className="check">
                            <input
                                type="checkbox"
                                name="checkbox"
                                value="checked"
                            />
                            <span>Add Terms and Condition</span>
                        </div>

                        <button className="btn"
                            onClick={this.fetchData} disabled={loading}>
                            {loading && <i className="fa fa-refresh fa-spin"></i>}
                            {loading && <span> Loading Finish</span>}
                            {!loading && <span>Finished</span>}
                        </button>

                        <button
                            className="backBtn"
                            onClick={this.prevStep}>
                            Back
                        </button>


                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }

}
