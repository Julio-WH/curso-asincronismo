const promise = new Promise(function (resolve, reject){
   resolve('Funcionando')
});

const cows = 11;

const countCows =new Promise(function (resolve, reject){
   if (cows > 10){
       resolve(`Nosotros tenemos ${cows} vacas en la granja`)
   }{
       reject("No tienes el minimo de vacas en la granja")
    }
});

countCows.then((result)=>{
   console.log(result)
}).catch((error) =>{
   console.log(error)
}).finally(()=> {
    console.log('Final')
});