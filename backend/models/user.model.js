const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

// Create Schema
const USER_SCHEMA = new SCHEMA({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
}, {
    timestamps: true
});

// Initialize model
const USER = MONGOOSE.model('USER', USER_SCHEMA);

// Export model
module.exports = USER;