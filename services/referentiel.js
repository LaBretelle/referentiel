const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const rows = await db.query(
    `SELECT ID, PROCESS, DOCUMENT, JURIDICTION, JUSTIF_RISQUE, RISQUE, DUA, TXTREF, DECLENCHEMENT_DUA, SORT_FINAL, COMMUNICABILITE, OBSERVATIONS 
    FROM referentiel.Documents`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}

module.exports = {
  getMultiple
}