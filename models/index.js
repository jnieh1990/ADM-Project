var users = require('../schema/users');
var pdv = require('../schema/pdv');

exports.User = mongoose.model('user', users.schema);
exports.Pdv = mongoose.model('pdv', pdv.pdvSchema);