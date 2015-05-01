var array = [];

/**
 * index Action
 *
 * @param req
 * @param res
 */
exports.index = function(req, res){
    var person = {fname : 'Youssef', lname : 'jnieh', age : 25};

    var x;
    for( x in person ){
        addToArray(person);
    }

    console.log(array);

    var returnResponseOfFileJson = function(content){
        res.json(content);
    };

    var returnError = function () {
        res.status(500).send('ERROR');
    };


    fs.readFileAsync('test.json')
        .then(logLib.logContent)
        .then(JSON.parse)
        .catch(logLib.throwError)
        .done(returnResponseOfFileJson, returnError)
    ;

    console.log("autre chose");
};

function addToArray(person){
    array.push(person);
    console.log(array);
}