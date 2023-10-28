//clases

//primera forma funcion constructora
//function Carro(marca, color, precio){
//    this.marca= marca;
  //  this.color= color;
   // this.precio= precio;
    //this.identificacion= function(){
//return "hola soy un" + this.marca + "y valgo " + this.precio;
  //  }}

// instacia
//var auto1 = new Carro("Audi", "Azul", 15000);
//var auto2 = new Carro("Nissan", "Gris", 20000);
//console.log(auto1.identificacion());
//return auto1;
//return auto2;

//! SEGUNDA FORMA (CLASE)
class Carro{
    constructor(marca,color,precio){
        this.marca= marca;
    this.color= color;
    this.precio= precio;
    this.identificacion= function(){
return "hola soy un" + this.marca + "y valgo " + this.precio;
    };
    } 
    }

//instancia 
var auto3= new Carro("Renaul", "Rojo", 10000)
console.log(auto3);


//! PROTOTIPO
