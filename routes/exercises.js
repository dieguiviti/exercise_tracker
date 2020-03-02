const ROUTER = require('express').Router();
const EXERCISE = require('../models/exercise.model');

// Get all exercises route
ROUTER
    .route('/')
    .get( (request, response) => {
        EXERCISE
            .find()
            .then( exercise => response.json(exercise))
            .catch( error => response.status(400).json('Error: ' + error));
    });

// Add an exercise
ROUTER
    .route('/add')
    .post( (request, response) => {
        // Initialize exercise properties and values
        let username = request.body.username;
        let description = request.body.description;
        let duration = Number(request.body.duration);
        let date = request.body.date;

        // Initialize exercise
        const NEW_EXERCISE = new EXERCISE({
            username,
            description,
            duration,
            date
        });

        // Save exercise
        NEW_EXERCISE
                .save()
                .then( () => response.json('Exercise Added!'))
                .catch( error => response.status(400).json('Error: ' + error));
    });

// Get a single exercise data
ROUTER
    .route('/:id')
    .get( (request, response) => {
        EXERCISE
            .findById(request.params.id)
            .then( exercise => response.json(exercise))
            .catch( error => response.status(400).json('Error: ' + error));
    });

// Delete an exercise
ROUTER
    .route('/:id')
    .delete( (request, response) => {
        EXERCISE
            .findByIdAndDelete(request.params.id)
            .then( exercise => response.json('Exercise succesfully deleted'))
            .catch( error => response.status(400).json('Error: ' + error));
    });

// update Exercise
ROUTER
    .route('/update/:id')
    .post( (request, response) => {
        EXERCISE
            .findById(request.params.id)
            .then( exercise => {
                // update exercise props
                exercise.username = request.body.username;
                exercise.description = request.body.description;
                exercise.duration = Number(request.body.duration);
                exercise.date = request.body.date;

                // save back to db
                exercise
                    .save()
                    .then( () => response.json('Exercise updated!'))
                    .catch( error => response.status(400).json('Error: ' + error));
            })
            .catch( error => response.status(400).json('Error: ' + error));
    });


module.exports = ROUTER;