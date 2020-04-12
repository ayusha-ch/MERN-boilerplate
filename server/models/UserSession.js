const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
