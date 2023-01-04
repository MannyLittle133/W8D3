Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

let example = [1,2,3,4,5].myEach(function(ele){
    console.log(ele + 2)
})