const express = require('express');
const app = express();
const rechercheRouter = express.Router();
const referentiel = require('../services/referentiel');
const helper = require('../helper');

app.set('view engine', 'ejs');

rechercheRouter.get('/recherche', async function(req, res, next) {
  try {
  	const response = await referentiel.getMultiple(req.query.page);
  	const jsonData = response.data;
    // regroupement des données par process
    const groupedData = helper.groupByProcess(jsonData);
    res.render('pages/recherche', { groupedData : groupedData });
  } catch (err) {
    console.error(`Error while getting referentiel `, err.message);
    next(err);
  }
});

module.exports = rechercheRouter;