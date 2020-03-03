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


 // Initialize user properties and values
 ROUTER.route('/add').post((req, res) => {
     const username = req.body.username;
   
     const newUser = new USER({username});
   
     newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = ROUTER;