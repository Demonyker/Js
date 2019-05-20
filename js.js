var i = 0
var arr = [100, 100, 500, 300, 100, -400]
var sum = 0
var maxNumber = 0
function maxsum(arr) {
        for (i; i < arr.length; i++) {
            sum = sum + arr[i]
            if (sum > maxNumber) {
             return maxNumber = sum
            }
        }
}
maxsum(arr)
console.log(maxNumber)