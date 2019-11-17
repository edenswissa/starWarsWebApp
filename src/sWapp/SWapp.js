import React, { Component } from 'react';
import classes from './SWapp.module.css';
import Login from '../login/Login';
import Characters from '../characters/Characters';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';
import Films from '../films/Films';
import axios from 'axios'
import Spinner from '../ui/spinner/Spinner';
import { withCookies } from 'react-cookie';

class SWapp extends Component {

    state = {
        loading: false
    }

    login = (user) => {
        this.setState({loading:true});
        axios.post("http://localhost:8080/api/login", user).then(
            newUser => {
                this.setState({loading:false});
                this.props.onLogin(newUser.data);
                this.props.history.push("/characters");
            }
        ).catch(error => {
            alert(error);
            this.setState({loading:false});
        });
    }

    getUser = (uuid) => {
        const obj = { uuid: uuid };
        this.setState({loading:true});
        axios.post("http://localhost:8080/api/getUser", obj).then(
            response => {
                this.setState({loading:false});
                this.props.onLogin(response.data);
                const cookies = this.props.cookies;
                cookies.set(obj.uuid,response.data.films);
            }
        ).catch(error => {
            alert(error);
            this.setState({loading:false});
            this.props.history.push("/login");
        });
    }

    getCharacters = () => {
        this.setState({loading:true});
        axios.get("http://localhost:8080/api/getPeoples").then(
            data => {
                this.setState({loading:false});
                this.props.onGetCharacters(data.data);
            }
        ).catch(error => {
            alert(error);
            this.setState({loading:false});
        });
    }

    saveCharacters = (favCharacters) => {
        this.setState({loading:true});
        const user = { ...this.props.user };
        user.favCharacters = favCharacters;
        axios.post("http://localhost:8080/api/saveFavorites", user).then(
            response => {
                const uuid = response.data.uuid;
                this.setState({loading:false});
                const cookies = this.props.cookies;
                cookies.set(uuid,response.data.films);
                this.props.history.push("/films/" + uuid);
            }
        ).catch(error => {
            alert(error);
            this.setState({loading:false});
        });
    }


    render() {

        let data = null;
        if (this.state.loading) {
            data = <div className={classes.Spinner}>
                <Spinner/>
            </div>
        }

        return (
            <div className={classes.Body}>
            {data}
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/login" />} />
                <Route path="/login" exact render={() => <Login onSubmit={this.login} />} />
                <Route path="/characters" exact render={() => <Characters getCharacters={this.getCharacters}
                    characters={this.props.characters}
                    user={this.props.user}
                    onSave={this.saveCharacters}/>} />
                <Route path="/films/:uuid" render={() => <Films getUser={this.getUser} 
                                                                user={this.props.user} 
                                                                films={this.props.user.films}
                                                                cookies={this.props.cookies} />} />
            </Switch>
            </div>
        )
    }

}

const mapStateToProps = appState => {
    return {
        user: appState.user,
        characters: appState.characters
    }
}

const mapDispachToProps = dispatch => {
    return {
        onLogin: (user) => dispatch({ type: actionType.LOGIN, user: user }),
        onGetCharacters: (characters) => dispatch({ type: actionType.GET_CHARACTERS, characters: characters }),
        onSaveFavCharacters: (favCharacters, films) => dispatch({ type: actionType.SAVE_FAVORITES_CHARACTERS, favCharacters: favCharacters, films: films })
    }
}
export default connect(mapStateToProps, mapDispachToProps)(withCookies(withRouter(SWapp)));
