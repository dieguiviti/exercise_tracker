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
        let name = request.body.name;
        let username = request.body.username;
        let email = request.body.email;
        let password = request.body.password;

        // Initialize user
        const NEW_USER = new USER({
            name,
            username,
            email,
            password
        });

        // Save user to database
        NEW_USER
                .save()
                .then( () => response.json('User Added!'))
                .catch( error => response.status(400).json('Error: ' + error));
    });

module.exports = ROUTER;