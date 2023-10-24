var arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
// posiciones 
//             0                    7

console.log(arreglo.length-1);

console.log("hola".charAt(3));
console.log(arreglo.at(-1));
comsole.log(arreglo[arreglo.length -1]);


for( var i =0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// forEach >>> no modifica el arreglo original

arreglo.forEach(function(elem){
    elem = elem + "a";
    console.log(elem);

});

// map
var otro= arreglo.map(function (elem,indice,array){
    elem= elem + " " + indice;
    console.log(elem, indice, array);
    return elem
});
console.log(otro);

// filter >> devuelve un neuvo array con los elementos que cumplan cierta condicion

var filtrados = arreglo.filter(function(elem){
    if(elem.length === 4);
    return elem;
})
 console.log(filtrados);

//reduce
var numeros = [1, 2, 3, 4];
var total  = numeros.reduce(function(acum, elem){
    acum = acum + elem
    return acum;
});

console.log(total);
 
// Metodos de arreglos
var arr = [1, 2, 3]

console.log (arr);
// push >> agrega un elemento al final del array y devuelve la longitud del nuevo array
var prueba=arr.push(7);
console.log(prueba);
console.log(arr);
// pop >> elimina un elemento al final del array y devuelve el elemento que borro
var prueba2=arr.pop();
console.log(prueba2);
console.log(arr);
//unshift >>> Agrega un elemento al princiop del array y devuelve la longitud del nuevo array
var prueba3=arr.unshift(0)
console.log(prueba3);
console.log(arr);
// shift >>> quita un elemento al principio del array
var prueba4= arr.shift()
console.log(prueba4);
console.log(arr);


//OBEJTO ARGUMENTS >> es propio de las funciones, es un objeto, que se comporta como un arreglo, contiene todos los parametros de la funcion

function saludar(){
    arguments
    return "Hola";
}
