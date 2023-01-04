Array.prototype.uniq = function() {

    let retArr = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== this[i+1]) {
            retArr.push(this[i]);
        }
        // let el = this[i]
        // if (!retArr.includes(el)) {
        //     retArr.push(el)
        // }

    }
    
    return retArr;
}

console.log([1,2,2,3,3,3].uniq())