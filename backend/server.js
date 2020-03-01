const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const CORS = require('cors');
// Configure connection to .env file
const DOT_ENV = require('dotenv');
DOT_ENV.config();

// Initialize app
const APP = EXPRESS();

// Determine port
const PORT = process.env.PORT || 5000;

// Use Json parse and cors
APP.use(EXPRESS.json());
console.log('- Json parser working');
APP.use(CORS());
console.log('- CORS working');

// DB Configuration
const DB_URI = process.env.MONGODB_URI;
const DB_OPTIONS = { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };
// DB connect and announce  
MONGOOSE
        .connect(DB_URI, DB_OPTIONS)
        .then(console.log(`MONGODB_URI connection has been ESTABLISHED`))
        .catch( error => console.log('Error: ' + error));

// ROUTERS
const EXERCISE_ROUTER = require('./routes/exercises');
const USER_ROUTER = require('./routes/users');
// ROUTES
APP.use('/exercises', EXERCISE_ROUTER);
console.log('- Exercise route recognized');
APP.use('/users', USER_ROUTER);
console.log('- Users route recognized');

// APP server please listen
APP.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT: ${PORT}`);
});