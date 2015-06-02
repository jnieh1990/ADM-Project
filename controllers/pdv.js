index = function (req, res) {
    var returnResponse = function(collection){
        //res.render('pdvs', { pdvs : collection });
        res.json(collection);
    };

    models.Pdv.findAsync()
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};

    exports.index = index;

exports.one = function (req, res) {
    var options = {libelle : "Rabat"};

    var returnResponse = function(obj){
        //res.render('user', {user : obj});
        res.json(obj);
    };

    models.Pdv.findOneAsync(options)
        .then(logLib.logContent)
        .then(returnResponse)
    ;

};


exports.create = function (req, res) {
    var returnResponse = function(obj){
        res.json(obj);
    };
    models.Pdv(req.body).saveAsync()
        .then(logLib.logContent)
        .then(returnResponse())
    ;
};

ecouteDb = models.Pdv.on('beforeInsert', function(pdv) {

    console.log('A new book "%s" was inserted', pdv.libelle);
});


