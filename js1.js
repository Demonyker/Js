var result
var alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var pos1 = prompt('введите первую позицию')
var pos2 = prompt('введите вторую позицию')
var slon = (arg1, arg2) => {
   let arg1n = arg1.split('')
   let arg2n = arg2.split('')
    if ( arg1n[0] === arg2n[0] || arg1n[1] === arg2n[1]){
    return result = false;
}
   for (let i = 0; i < alf.length; i++) {
       if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+1] || arg2n[0] === alf[i-1]) && (+arg2n[1] === (+arg1n[1] + 1)) || +arg2n[1] === (+arg1n[1] - 1) ){
       return result = true;
       } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+2] || arg2n[0] === alf[i-2]) && (+arg2n[1] === (+arg1n[1] + 2)) || +arg2n[1] === (+arg1n[1] - 2) ) {
       return result = true;
       } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+3] || arg2n[0] === alf[i-3]) && (+arg2n[1] === (+arg1n[1] + 3)) || +arg2n[1] === (+arg1n[1] - 3) ) {
       return result = true;
       } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+4] || arg2n[0] === alf[i-4]) && (+arg2n[1] === (+arg1n[1] + 4)) || +arg2n[1] === (+arg1n[1] - 4) ) {
       return result = true;
    } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+5] || arg2n[0] === alf[i-5]) && (+arg2n[1] === (+arg1n[1] + 5)) || +arg2n[1] === (+arg1n[1] - 5) ) {
       return result = true;
    } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+6] || arg2n[0] === alf[i-6]) && (+arg2n[1] === (+arg1n[1] + 6)) || +arg2n[1] === (+arg1n[1] - 6) ) {
       return result = true;
    } else if ( arg1n[0] === alf[i] && (arg2n[0] === alf[i+7] || arg2n[0] === alf[i-2]) && (+arg2n[1] === (+arg1n[1] + 7)) || +arg2n[1] === (+arg1n[1] - 7) ) {
       return result = true;
    } else {
        return result = false;
    }
}
}
slon(pos1, pos2)
console.log(result)
