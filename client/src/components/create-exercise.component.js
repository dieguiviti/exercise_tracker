import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

//  Create Exercise Component
export default class CreateExercise extends Component {
    // constructor properties
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        };
    };

    componentDidMount() {
        axios.get('http://localhost:5000/users').then(res => {
            if (res.data.length > 0){
                this.setState({
                    users: res.data.map( user => user.username),
                    username: res.data[0].username
                });
            };
        });
    };

    onChangeUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    onChangeDescription = event => {
        this.setState({
            description: event.target.value
        });
    };

    onChangeDuration = event => {
        this.setState({
            duration: event.target.value
        });
    };

    onChangeDate = date => {
        this.setState({
            date: date
        });
    };

    onSubmit = event => {
        event.preventDefault();

        const EXERCISE = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(EXERCISE);

        axios
            .post('http://localhost:5000/exercises/add', EXERCISE)
            .then( response => console.log(response.data))
            .catch( error => console.log(error));

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Add Workout</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                >
                                    {
                                        this.state.users.map( user => {
                                            return <option
                                                    key={user}
                                                    value={user}>
                                                        {user}
                                                    </option>
                                        })
                                    }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text" 
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input  type="text" 
                                required
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <br/>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group mt-5">
                        <input type="submit" value="I did that!" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        );
    };
};