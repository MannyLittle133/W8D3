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

//console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function() {
    let sumArr = [];

    for (let i = 0; i < this.length; i++) {
        let num1 = this[i]; 

        for (let j = i + 1; j < this.length; j++) {
            let num2 = this[j];

            if (num1 + num2 === 0) {
                sumArr.push([i, j])
            }
        }
    }
    return sumArr; 
}

//console.log([1, -1, 3, 2, -2, -3].twoSum())

Array.prototype.transpose = function() {
    let newArr = []

    for (let i = 0; i < this.length; i++) {
        newArr.push([])


        for (let j = 0; j < this.length; j++) {

            newArr[i].push(this[j][i])
        }
    }
    return newArr
}

console.log([[1, 2], [3, 4], [5, 6]].transpose())