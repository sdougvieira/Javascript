//crie uma funçao que receba uma array e um número
function validaArray(arr,num){
    try{
        //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');
        
        //Se o array não for do tipo 'object', lance um erro do tipo TypeErro
        if(typeof arr !=='object') 
        throw new TypeError('Array precisa ser do tipo object');

        //Se o array não for do tipo 'number', lance um erro do tipo TypeErro
        if(typeof num !=='number') 
        throw new TypeError('Array precisa ser do tipo number');

        //Se o tamanho do Array for diferente do número enviado como parâmetro, lance um erro do tipo RangeErro
        if(arr.lenght !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    }
        //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instaceof
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceErro!")
            console.log(e.message)
        }   else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }   else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }   else {
            console.log("Tipo de erro não esperado:" + e)
        }  
    }
}

console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([],'a'));