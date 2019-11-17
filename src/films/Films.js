import React, { Component } from 'react';
import classes from './Films.module.css';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Films extends Component {

    componentDidMount() {
        const uuid = this.props.match.params.uuid;
        const cookies = this.props.cookies;
        const films = cookies.get(uuid);
        if(films) {
            console.log('from cookies');
            this.setState({films:films});
        } else {
            if (this.props.user.uuid !== uuid) {
                console.log('getUser');
                this.props.getUser(uuid);
            }
        }
    }

    state = {
        films:[]
    }

    componentDidUpdate() {
        if(this.state.films.length === 0 && this.props.films) {
            this.setState({films:this.props.films});
        }
    }

    share = () => {
        alert("Your link to the next time is: " + window.location.href);
    }

    render() {

        let films = null;
        if (this.state.films.length > 0) {
            films = this.state.films.map((item, index) => {
                return <Paper className={classes.Paper} key={index}>
                    <div>
                        <span className={classes.MovieName}>Movie name:</span>
                        <span className={classes.MovieTitle}>{item.title}</span>
                    </div>
                    <span className={classes.Number}>{"Number of charactars from your favorite list: " + item.numOfFavoriteCharacters}</span>
                </Paper>
            })
        }
        return (
            <div className={classes.Container}>
                <span className={classes.Title}>Suggested Movies</span>
                {films}
                <div className={classes.ButtonContainer}>
                    <Button variant="outlined" color="primary" onClick={this.share} classes={{ root: classes.Button }}>
                        <div className={classes.ButtonTextContainer}>
                            <span className={classes.ButtonText}>Share</span>
                            <i className="fas fa-share-alt"></i>
                        </div>
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Films);