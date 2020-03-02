import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Exercise component
const Exercise = (props) => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration} min</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <button className="btn btn-secondary"><Link id="fix-link" to={'/edit/' + props.exercise._id}>Fix</Link></button> | <button className="btn btn-danger" onClick={()=>{props.deleteExercise(props.exercise._id)}}>X</button>
        </td>
    </tr>
);

// Exercises list Component
export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises').then( res => {
            this.setState({
                exercises: res.data
            });
        }).catch(error => console.log(error));
    };

    deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/'+ id).then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter( exercise => exercise._id !== id)
        });
    };

    exercisesList = () => {
        return this.state.exercises.map( currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}/>;
        });
    };


    render(){
        return(
            <div className="container">
                <h3>History</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
        );
    };
};