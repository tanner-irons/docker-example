const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

//const stuffController = require('./controllers/stuff.js');

router.get('/', (req, res) => {
    res.json({ message: 'It\'s Alive!!!' });
});

app.use('/api', router);
app.listen(port);

//router.route('/stuff').get(stuffController.getStuff);

module.exports = app;