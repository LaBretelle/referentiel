const express = require('express');
const router = express.Router();
const referentiel = require('../services/referentiel');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await referentiel.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting referentiel `, err.message);
    next(err);
  }
});

module.exports = router;