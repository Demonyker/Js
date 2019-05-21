var i = 0
var arr = [100, 100, 200, 300, 100, -400]
var sum = 0
var maxNumber = 0
function maxsum(arr) {
        for (i; i < arr.length; i++) {
            sum = sum + arr[i]
            if (sum > maxNumber) {
             maxNumber = sum 
            }
        }
}
maxsum(arr)
console.log(maxNumber)