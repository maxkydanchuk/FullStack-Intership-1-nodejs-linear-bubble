const data = require('./prize.json');

function linearSearch (dataset, property, query) {
    const searchResult = [];
    for (let i = 0; i < dataset.length; i++) {
        if(dataset[i][property] === query) {
           searchResult.push(dataset[i]);
        }
    }

    if(searchResult.length > 1 ) {
        console.log('Пошук триває');
        return searchResult;
    } else {
        return console.log('За вашим запитом не знайдено елементів');
    }
}

module.exports = linearSearch;
