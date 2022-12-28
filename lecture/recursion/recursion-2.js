// =====================================================================================================================
// program to flatten array :[1,2[3,4,5],[6,7]] =>[1,2,3,4,5,6,7]

let arr = [1,[2],[3, 4, 5], [6, 7]];
function isFltten(arr){
  let flatArr=[]
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i]) ==false) flatArr.push(arr[i])
    else flatArr = flatArr.concat(isFltten(arr[i]));
    
  }
   return flatArr;
}

console.log(isFltten(arr))

// ===========================================================================================================================

// to using recursion we to given array will be reverse


let arr1 = [1, 2, 3, 4, 5, 6, 7];
function reverse (arr1,start,end){
  if(start <= end){
     
      temp = arr1[start];
     arr1[start] = arr1[end];
     arr1[end] = temp;

      reverse (arr1, start + 1, end - 1);
      return arr1
  }
   
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7], 0, arr1.length - 1));

// =======================================================================================================================
// to using recursion we can string are reverse
let str="hello"  //olleh

function reversStr(str){
   if(str.length <= 0)  return str

    return reversStr(str.slice(1))+str[0]     // ello + h
                                              // llo +  e 
                                              //lo +    l
                                              // o+     l
                                              //        o 

}

console.log(reversStr(str));
// =============================================================================================================


// to check plindrom string or not 
let string="121"

function plindrom(string,l,r){
  if (l >= r) return true
   if (string[l] != string[r]) return false;
   return plindrom(string,l+1,r-1)
}

console.log(plindrom(string,0,string.length-1));


// ========================================================================================

let a=1234
let temp=0
function solution(a) {
  //Write your solution here
  if (a == 0) return temp;

  let lastDight = a % 10;
  console.log(lastDight);
  a = Math.floor(a / 10);
  console.log(a);
  temp = temp * 10 + lastDight;
  console.log(temp)
  return solution(a);
}

console.log(solution(a))

// ==================================================================================

// to using recursion we can only first letter only uppercase
let string1=["abc", "def", 'pqr', 'xyz']

function uppercase(string1){
  //base condition
  let result=[]

  if(string1.length <=0){
  return []
  }

 let x= string1[0][0].toUpperCase()+string1[0].slice(1)
  result.push(x)
  return result.concat(uppercase(string1.slice(1)))

}

console.log(uppercase(string1))



// =================================================================================================

// to given word reverse  str= "hello word"  ==> "olleh drow"

// let string2="hello word"

function reversestr(string2){
  //base condtion
   if(string2.length == 0) return ""

  //recursion condtion
   return reversestr(string2.slice(1)) + string2[0];
}

function reverseWord(string2){
  let newstr = string2.split(" "); //["hello","word"]
for (let i = 0; i < newstr.length; i++) {
    newstr[i] = reversestr(newstr[i]);
  }
  return newstr.join(" ");
}
console.log(reverseWord("hello word"));