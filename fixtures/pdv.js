/**
 * Created by Youssef on 28/04/2015.
 */
var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone');
var id = pow.createObjectId;


//Objects
fixtures.load({
    pdv : [
        {
            "_id":id(),
            "libelle":"Rabat",
            "etat":"vert",
            "transactions":[
                {
                    "_id":id(),
                    "numero" : "0123",
                    "date" : "1992/02/20",
                    "montant" : 1200.00
                },
                {
                    "_id":id(),
                    "numero" : "0125",
                    "date" : "2013/02/15",
                    "montant" : 2500.00
                }
            ]
        },
        {
            "_id":id(),
            "libelle":"Casablanca",
            "transactions":[
                {
                    "_id":id(),
                    "numero" : "0126",
                    "date" : "2015/08/14",
                    "montant" : 1300.00
                },
                {
                    "_id":id(),
                    "numero" : "0128",
                    "date" : "1999/12/25",
                    "montant" : 1200.00
                }
            ]
        }
    ]
});
