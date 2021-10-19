const standard = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, cb) {
    const newCollection = standard(collection);

    for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i]);
    }

    return collection;
}

function myMap(collection, cb) {
    const newCollection = standard(collection);
    const arr = [];

    for (let i = 0; i < newCollection.length; i++) {
        arr.push(cb(newCollection[i]));
    }

    return arr;
}

function myReduce(collection, cb, acc) {
    let newCollection = standard(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = cb(acc, newCollection[i], newCollection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const newCollection = standard(collection);

    for (let i = 0; i < newCollection.length; i++) {
        let coll = newCollection[i];

        if (predicate(coll)) {
            return coll;
        }
    }
}

function myFilter(collection, predicate) {
    const newCollection = standard(collection);
    const arr = [];

    for (let i = 0; i < newCollection.length; i++) {
        let coll = newCollection[i];

        if (predicate(coll)) {
            arr.push(coll);
        }
    }

    return arr;
}

function mySize(collection) {
    const newCollection = standard(collection);
    return newCollection.length;
}

function myFirst(array, [n]) {
    
}