var arr = [-1, -1, 20, 9]
function maxsum(arr) {
    let sum = 0
    let maxNumber = 0 
    for ( let i = 0; i < arr.length; i++) {
        sum = arr[i] 
        if (sum > maxNumber) {
        maxNumber = sum 
        }
        for (let j = i+1; j<arr.length; j++) {
            sum= sum+arr[j]
            if (sum > maxNumber) {
                maxNumber = sum 
                }
        }
    }
console.log(maxNumber)
}
maxsum(arr)