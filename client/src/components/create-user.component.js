import React, { Component } from 'react';
import axios from 'axios';

// Create User Component
export default class CreateUser extends Component {
    // constructor properties
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        };
    };

    onChangeUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();

        const USER = {
            username: this.state.username
        };

        console.log(USER);

        axios
            .post('/users/add', USER)
            .then( response => console.log(response.data))
            .catch( error => console.log(error));

        this.setState({
            username: ''
        });

        window.location = '/create';
    }

    render(){
        return(
            <div>
                <h3>New Athlete</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    };
};