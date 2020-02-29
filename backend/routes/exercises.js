const ROUTER = require('express').Router();
const EXERCISE = require('../models/exercise.model');

// Get users route
ROUTER
    .route('/')
    .get( (request, response) => {
        EXERCISE
            .find()
            .then( exercise => response.json(exercise))
            .catch( error => response.status(400).json('Error: ' + error));
    });

// Add a user
ROUTER
    .route('/add')
    .post( (request, response) => {
        // Initialize user properties and values
        const USERNAME = request.body.username;
        const DESCRIPTION = request.body.description;
        const DURATION = Number(request.body.duration);
        const DATE = Date.parse(request.body.date);

        // Initialize user
        const NEW_EXERCISE = {
            USERNAME,
            DESCRIPTION,
            DURATION,
            DATE
        };

        // Save user
        NEW_EXERCISE
                .save()
                .then( () => response.json('Exercise Added!'))
                .catch( error => response.status(400).json('Error: ' + error));
    });

module.exports = ROUTER;