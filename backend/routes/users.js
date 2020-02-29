const ROUTER = require('express').Router();
const USER = require('../models/user.model');

// Get users route
ROUTER
    .route('/')
    .get( (request, response) => {
        USER
            .find()
            .then( users => response.json(users))
            .catch( error => response.status(400).json('Error: ' + error));
    });

// Add a user
ROUTER
    .route('/add')
    .post( (request, response) => {
        // Initialize user properties and values
        const USERNAME = request.body.username;
        const NAME = request.body.name;
        const EMAIL = request.body.email;
        const PASSWORD = request.body.password;

        // Initialize user
        const NEW_USER = {
            NAME,
            USERNAME,
            EMAIL,
            PASSWORD
        };

        // Save user
        NEW_USER
                .save()
                .then( () => response.json('User Added!'))
                .catch( error => response.status(400).json('Error: ' + error));
    });

module.exports = ROUTER;