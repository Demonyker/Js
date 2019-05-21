var strokaOne = 'abcdefgh'
var strokaTwo = 'cdehgbaf'         
let checkString = (string1,string2) => {
    let result
    let checkNumber = 0;
    arr1 = string1.split('')
    arr2 = string2.split('')
    arr1k = Object.keys(arr1)
    arr1Len = arr1.length
    for ( let i = 0; i < arr1.length; i++) {
        for ( let j = 0; j< arr1.length; j++) {
            if (((+arr1k[i] % 2 === 0) && (+arr1k[j] % 2 === 0) && arr1[i] === arr2[j]) || ((+arr1k[i] % 2 !== 0) && (+arr1k[j] % 2 !== 0) && arr1[i] === arr2[j])) {
            checkNumber += 1
            }
        }      
    }
    if (checkNumber === +arr1Len) {
        result = 'Можно'
    } else {
        result ='Нельзя'
    }
    console.log(result)
}
checkString(strokaOne, strokaTwo)

