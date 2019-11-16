import React, { Component } from 'react';
import classes from './Login.module.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.png';

class Login extends Component {

    state = {
        user: {
            userName: null,
            password: null
        }
    }

    onTextFieldChange = (event) => {
        const value = event.target.value;
        const textFieldName = event.target.name;
        const user = {...this.state.user};
        user[textFieldName] = value;
        this.setState({ user: user });
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.user);
    }

    render() {
        return (
            <div className={classes.Login}>
                <img src={logo} alt="starWars" className={classes.Logo} />
                <Paper className={classes.Paper}>
                    <form className={classes.Form}>
                        <TextField
                            name="userName"
                            required
                            onChange={this.onTextFieldChange}
                            id="user_name"
                            label="User name"
                            margin="normal"
                            variant="outlined"
                            classes={{ root: classes.TextField }}
                        />
                        <TextField
                            name="password"
                            onChange={this.onTextFieldChange}
                            required
                            id="password"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            classes={{ root: classes.TextField }}
                        />
                        <div className={classes.ButtonContainer}>
                            <Button variant="outlined" color="primary" onClick={this.handleSubmit} classes={{ root: classes.Button }}>Submit</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default Login;