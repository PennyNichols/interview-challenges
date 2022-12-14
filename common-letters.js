const strs = ['flower', 'flow', 'flight']
let common = []
for (let str of strs){
  for (let letter of str){
    if( !common.includes(letter) ){
      common.push(letter)
    } else{
      return
    }
  }
}
console.log(common)
console.log('working')