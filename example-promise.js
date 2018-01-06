function getTempCallback(location,callback){
  callback(undefined,88);
  callback('this is error');
}

getTempCallback('Mexico',function(err,temp){
  if(err){
    console.log("error",err);
  }
  else{
    console.log("success", temp);
  }
});

function getTempPromise(location){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(98);
      reject('City not found');
    },1000);
  });
}
getTempPromise('bombay').then(function(temp){
  console.log('Success',temp);
},function(err){
  console.log('error',err);
});
//new challange is create a promisefunction to add two numbers

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      if(typeof a == 'number' && typeof b == 'number')
      {
        resolve (a+b);
      }
      else {
        reject('Please enter numbers')
      }

    },1500);

  });

}
addPromise(2,'a').then(function(temp){
  console.log("total is",temp);
},function(err){
  console.log("Error", err);
});
