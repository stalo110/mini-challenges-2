function removeDuplicates(obj) {
    const newObj = {};
    const objKeys = Object.keys(obj).reverse();

    let prev = [];

    for(let i= 0; i < objKeys.length; i++){
        let newArr = [];
        // let prev = obj[objKeys[i - 1]]
        let curr = obj[objKeys[i]];
        
        for(let j = 0; j < curr.length; j++){
            if(i === 0){
                newArr.push(curr[j])
                prev.push(curr[j])
            }
            if(i > 0 && !prev.includes(curr[j])){
                newArr.push(curr[j])
                prev.push(curr[j])

            }
        }

        // Remove the duplicate and assign to object key
        newObj[objKeys[i]] = newArr.reduce((a, b) => !a.includes(b) ? [...a, b] : a, []);

    }

    return newObj
}

// console.log(removeDuplicates({
//     "1": ["A", "B", "C"],
//     "2": ["A", "B", "D", "A"]

//   }))

module.exports = removeDuplicates;

