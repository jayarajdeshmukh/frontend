const p1 = new Promise(promiseHnadler);

function promiseHnadler(resolve,reject){
    resolve("promise is resolved");
}

p1
 .then((data)=>console.log(data))
 .catch((err)=>console.log(err))
 .finally(()=>console.log("finally"));