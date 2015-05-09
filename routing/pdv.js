var pdv = require('../controllers/pdv');

app.get('/pdvs', pdv.index);
app.get('/pdv/1', pdv.one);
app.post('/pdvs', pdv.create);
