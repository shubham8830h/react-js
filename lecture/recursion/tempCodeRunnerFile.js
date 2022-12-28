let number=10
function no(i,number){
if (i > number) return;

console.log(i);      //this print acending order
no(i + 1, number);
console.log(i);     //this print in decending order
}
no(1, number);
