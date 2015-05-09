var etats = 'vert jaune rouge'.split(' ');



var transactionSchema = new mongoose.Schema({
    numero : { type: String, maxlength: 10 },
    date : { type: String },
    montant : { type: Number }
});

pdvSchema = new mongoose.Schema({
        libelle : { type: String, maxlength: 50 },
        etat : { type: String, enum: etats },
        transactions : [transactionSchema]
    }
);

exports.pdvSchema = pdvSchema;

pdvSchema.plugin(require('mongoose-lifecycle'));