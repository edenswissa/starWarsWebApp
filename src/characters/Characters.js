import React, { Component } from 'react';
import classes from './Characters.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

class Characters extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        if(Object.keys(this.props.user).length === 0) {
            this.props.history.push("/login");
        } else {
            if(this.props.user.favCharacters) {
                this.setState({favorites:this.props.user.favCharacters})
            }
            this.props.getCharacters();
        }
    }

    componentDidUpdate() {
        if(this.props.user.favCharacters && this.state.favorites.length === 0) {
            this.setState({favorites:this.props.user.favCharacters})
        }
    }

    onFavoriteClick = (item) => {
        const favorites = [...this.state.favorites];
        const url = item.url;
        const index = favorites.findIndex(item => item.url === url);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(item);
        }
        this.setState({ favorites: favorites });
    }

    onSaveClick = () => {
        this.props.onSave(this.state.favorites);
    }

    render() {

        let characters = null;
        if (this.props.characters) {
            characters = this.props.characters.map((item, index) => {
                let icon = <i className="far fa-heart fa-3x"></i>
                const url = item.url;
                if (this.state.favorites.findIndex(item => item.url === url) > -1) {
                    icon = <i className="fas fa-heart fa-3x" style={{ color: 'red' }}></i>
                }
                return <TableRow key={index}>
                    <TableCell classes={{ root: classes.CellWhite }} align="center">
                        <span>{item.name}</span>
                    </TableCell>
                    <TableCell classes={{ root: classes.CellWhite }} align="center">
                        <div className={classes.Icon} onClick={() => this.onFavoriteClick(item)}>
                            {icon}
                        </div>
                    </TableCell>
                </TableRow>
            })
        }

        return (
            <div className={classes.Container}>
                <div className={classes.TableContainer}>
                    <Table stickyHeader classes={{ root: classes.Table }}>
                        <TableHead>
                            <TableRow>
                                <TableCell classes={{ root: classes.Cell }} align="center">
                                    <span>Name</span>
                                </TableCell>
                                <TableCell classes={{ root: classes.Cell }} align="center">
                                    <span>Add To favorites</span>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {characters}
                        </TableBody>
                    </Table>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button variant="outlined" color="primary" onClick={this.onSaveClick} classes={{ root: classes.Button }}>Save</Button>
                </div>
            </div>
        )
    }

}

export default withRouter(Characters);