var users = require('../schema/users');

exports.User = mongoose.model('user', users.schema);