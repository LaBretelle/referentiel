function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
};

function groupByProcess(data) {
  return data.reduce((result, item) => {
    if (!result[item.PROCESS]) {
      result[item.PROCESS] = [];
    }
    result[item.PROCESS].push(item);
    return result;
  }, {});
}

module.exports = {
  emptyOrRows,
  groupByProcess
}