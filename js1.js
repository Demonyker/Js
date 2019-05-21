var result
var alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var pos1 = prompt('введите первую позицию')
var pos2 = prompt('введите вторую позицию')
var slon = (arg1, arg2) => {
   let arg1n = arg1.split('')
   let arg2n = arg2.split('')
   let arg1nP1 = arg1n[0].charCodeAt(0)
   let arg1nP2 = arg2n[0].charCodeAt(0)
   if ( (arg1n[1] - arg1nP1) === (arg2n[1] - arg1nP2) ) {
     result = true
   } else { 
     result = false
   }
   console.log(result)
}
slon(pos1, pos2)

