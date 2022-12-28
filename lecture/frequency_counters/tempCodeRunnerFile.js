
let arr11="hello"
let arr22="ollhoo"

function anagram(arr11,arr22){
  const map=new Map()

  for(let i of arr11){
    if(!map.has(i)){
      map.set(i,1)
    }else{
      map.set(i,map.get(i)+1)
    }
  }

  for(let j of arr22){
    if(map.has(j)){
      map.set(j,map.get(j)-1)
    }else{
      return false
    }
  }

  console.log(map)
for(let item of map){
  if(item[1] !=0){
    return false
  }
}
 return true
}
console.log(anagram(arr11,arr22))