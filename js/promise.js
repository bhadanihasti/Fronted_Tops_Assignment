const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
      var r=a+b
        if(r>100){
            resolve(r);
        } else {
            reject("invalid data");
        }
    });
};
const square=(a)=>{
    return new Promise((resolve,reject)=>{
        resolve(a*a); 
    })
  }

  const cube=(a)=>{
    return new Promise((resolve,reject)=>{
        resolve(a*a*a); 
    })
  }

  const myfun=async()=>{
    try{
        const sum=await add(50,60);
        const resp=await square(sum);
        const respcube=await cube(sum);
        console.log(resp);
        console.log(respcube);
    } catch(err){
        console.log(err);
    }
  }

  myfun();