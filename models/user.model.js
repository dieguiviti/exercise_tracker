const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;

// Create Schema
const USER_SCHEMA = new SCHEMA({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    }
}, {
    timestamps: true
});

// Initialize model
const USER = MONGOOSE.model('USER', USER_SCHEMA);

// Export model
module.exports = USER;