const data = require('./prize.json');
const bubbleSort = require('./bubble-sort');
const linearSearch = require('./linear-search');

const sortResult = bubbleSort(data.prizes, 'year', 'asc');
const searchResult = linearSearch(data.prizes, 'year', '2011');
