const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

// Create Schema
const EXERCISE_SCHEMA = new SCHEMA({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

// Initialize model
const EXERCISE = MONGOOSE.model('Exercise', EXERCISE_SCHEMA);

// Export model
module.exports = EXERCISE;