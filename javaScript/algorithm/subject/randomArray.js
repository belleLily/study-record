function randomArray(num, min, max) {
    let hash = [];
    while (hash.length < num) {
        let randomNum = min + Math.round(Math.random() * (max - min));
        if (hash.indexOf(randomNum) === -1) {
            hash.push(randomNum);
        }
    }
    return hash;
}

function randomArray(num, min, max) {
    let arrSet = new Set();
    while (arrSet.size < num) {
        let randomNum = min + Math.round(Math.random() * (max - min));
        arrSet.add(randomNum)
    }
    return Array.from(arrSet)
}