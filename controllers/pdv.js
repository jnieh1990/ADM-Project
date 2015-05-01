exports.index = function (req, res) {
    var returnResponse = function(collection){
        //res.render('pdvs', { pdvs : collection });
        res.json(collection);
    };
    models.Pdv.findAsync()
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};

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
