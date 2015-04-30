exports.index = function (req, res) {
    var returnResponse = function(collection){
        res.render('users', { users : collection });
    };
    models.User.find().sort({name:1}).limit(2).select('-_id').execAsync()
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};

exports.one = function (req, res) {
    var options = {name : req.params.name};

    var returnResponse = function(obj){
        res.render('user', {user : obj});
    };

    models.User.findOneAsync(options)
        .then(logLib.logContent)
        .then(returnResponse)
    ;

};

exports.create = function (req, res) {
    var returnResponse = function(obj){
        res.json(obj);
    };
    models.User(req.body).saveAsync()
        .then(logLib.logContent)
        .then(returnResponse())
        ;
};

exports.update = function (req, res) {
    var options = {_id : req.body._id};
    delete req.body['_id'];

    var returnResponse = function(obj){
        res.json(obj);
    };

    var returnUpdatedObject = function(obj){
        models.User.findOneAsync(options)
            .then(logLib.logContent)
            .then(returnResponse)
        ;
    };

    models.User.findOneAndUpdateAsync(options, req.body)
            .then(returnUpdatedObject())
        ;
};

exports.delete = function (req, res) {
    var options = {_id : req.params.id};

    var returnResponse = function(){
        res.json({message : 'All is done !!'});
    };

    var returnError = function(){
        res.status(500).json({message : '!! PROBLEM !!'});
    };

    models.User.findOneAndRemoveAsync(options)
        .catch(logLib.throwError)
        .done(returnResponse, returnError)
    ;

};