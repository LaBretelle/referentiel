const express = require('express');
const app = express();
const dataRouter = express.Router();
const referentiel = require('../services/referentiel');

app.set('view engine', 'ejs');

dataRouter.get('/data/:id', async function(req, res, next) {
	const id = parseInt(req.params.id, 10);
  try {
  	const response = await referentiel.getMultiple(req.query.page);
  	const jsonData = response.data;
    const item = jsonData.find(d => d.ID === id);
  	if (item) {
  		res.render('pages/data', { item: item});
  	} else {
  		res.status(404).send('Données non trouvées')
  	}
  } catch (err) {
    console.error(`Error while getting referentiel `, err.message);
    next(err);
  }
});

module.exports = dataRouter;