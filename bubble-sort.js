const data = require('./prize.json');

function bubbleSort(dataset, property, order) {
    const dataCopy = [...dataset];

    for (let i = 0; i < dataCopy.length; i++) {
        for (let j = 0; j < dataCopy.length; j++) {
            let current = dataCopy[j];
            let next = dataCopy[j + 1];
            let nextIndex = j + 1;

            if (order === 'asc') {
                if ((nextIndex < dataCopy.length) && (next[property] > current[property])) {
                    let tmp = dataCopy[j];
                    dataCopy[j] = dataCopy[j + 1];
                    dataCopy[j + 1] = tmp;
                }
            }
            if (order === 'desc') {
                if ((nextIndex < dataCopy.length) && (next[property] < current[property])) {
                    let tmp = dataCopy[j];
                    dataCopy[j] = dataCopy[j + 1];
                    dataCopy[j + 1] = tmp;
                }
            }
        }
    }
    return dataCopy;
}

module.exports = bubbleSort;
