function stringLength(string) {

    let count = 0;

    for(let char of string) {
        count++;
    }

    return count;
}

console.log(stringLength("Palabra"));