import React ,{Component} from 'react';
import classes from './Films.module.css';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

class Films extends Component {

    componentDidMount() {
        const uuid = this.props.match.params.uuid;
        if(this.props.user.uuid !== uuid) {
            this.props.getUser(uuid);
        }
        console.log(this.props.films);
    }

    componentDidUpdate() {
        console.log(this.props.films);
    }


    render() {

        let films = null;
        if(this.props.films) {
            films = this.props.user.films.map((item,index) => {
                return <Paper className={classes.Paper} key={index}>
                    <div>
                        <span className={classes.MovieName}>Movie name:</span>
                        <span className={classes.MovieTitle}>{item.title}</span>
                    </div>
                    <span className={classes.Number}>{"Number of charactars from your favorite list: " +item.numOfFavoriteCharacters}</span>
                </Paper>
            })
        }
        return(
            <div className={classes.Container}>
                {films}
            </div>
        )
    }
}

export default withRouter(Films);