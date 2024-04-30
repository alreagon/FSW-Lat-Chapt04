const strArray = ['Javascript', 'Java', 'C']

function forEach(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i++)
    {
        newArray.push(callback(array[i]))
    }
    return newArray
};

const lenArray = forEach(strArray, (item) => {
    return item.length
})
console.log(lenArray)