 var names=[ 'chandu','shiva','sujit'];
//
// names.forEach(function(name){console.log('foreach',name)});
//
// names.forEach((name)=>{console.log('arrow Func',name)});
//
// names.forEach((name)=>console.log(name));

// var rtrme=(name)=>name+'!';
// console.log(rtrme('sachin'));

// var Person = {
//   name:'mahesh',
//   greet: function(){
//               names.forEach((name)=>console.log(this.name+' says hi to '+name));
//         }
// };
// Person.greet();

var add=(a,b)=> a+ b;
var add2=(c,d)=>{ return c+d ; }

console.log(add(1,2));
console.log(add2(3,4));
