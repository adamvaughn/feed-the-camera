const fs = require('fs');
const path = require('path');

function filterByQuery(query, blogArray) {
  let tagsArray = [];
  let filteredResults = blogArray;
  if (query.tags) {
    if (typeof query.tags === 'string') {
      tagsArray = [query.tags];
    } else {
      tagsArray = query.tags;
    }
    console.log(tagsArray);
    tagsArray.forEach(tag => {
      filteredResults = filteredResults.filter(
        item => item.tags.indexOf(tag) !== -1
      );
    });
  }
  if (query.author) {
    filteredResults = filteredResults.filter(entry => entry.author === query.author);
  }
  if (query.date) {
    filteredResults = filteredResults.filter(entry => entry.date === query.date);
  }
  return filteredResults;
}

module.exports = {
    filterByQuery
};