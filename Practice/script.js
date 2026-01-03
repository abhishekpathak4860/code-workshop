function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked=true;
            if(dogwalked){
                resolve("Dog you walk");
            }else{
                reject("you didnt walk the dog");
            }
        },4000)
    })
}


async function doChores(){
    const walkdogResult=await  walkdog();
    console.log(walkdogResult);
}
doChores();