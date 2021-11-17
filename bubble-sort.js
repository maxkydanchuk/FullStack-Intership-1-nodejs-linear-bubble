const data = require('./prize.json');

function bubbleSort(dataset, property, order) {
    for (let i = 0; i < dataset.length; i++) {
        for (let j = 0; j < dataset.length; j++) {
            if (order === 'asc') {
                if ((j + 1 < dataset.length) && (dataset[j + 1][property] > dataset[j][property])) {
                    let tmp = dataset[j];
                    dataset[j] = dataset[j + 1];
                    dataset[j + 1] = tmp;
                }
            }
            if (order === 'desc') {
                if ((j + 1 < dataset.length) && (dataset[j + 1][property] < dataset[j][property])) {
                    let tmp = dataset[j];
                    dataset[j] = dataset[j + 1];
                    dataset[j + 1] = tmp;
                }
            }
        }
    }
    console.log('Триває сортування данних')
    return dataset;
}

const result = bubbleSort(data.prizes, 'year', 'asc');

module.exports = bubbleSort;
