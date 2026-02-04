import { Padre, Hijo } from "./polimorfismo.js";

const hijo=new Hijo();

const padre=new Padre();

hijo.metodo()


function funcion(parametro){

    parametro.metodo()
}


///////////////////////////////////////

// Clase base (Interfaz conceptual)
class Personaje {
  atacar() {
    throw new Error("El método atacar() debe ser implementado");
  }
}

// Subclases que implementan su propia versión de atacar
class Guerrero extends Personaje {
  atacar() {
    return "Ataca con espada ⚔️";
  }
}

class Mago extends Personaje {
  atacar() {
    return "Lanza una bola de fuego 🔥";
  }
}

class Arquero extends Personaje {
  atacar() {
    return "Dispara una flecha 🏹";
  }
}

// La función polimórfica: No sabe qué recibe, solo sabe que "ataca"
function iniciarCombate(personajes) {
  personajes.forEach(p => {
    console.log(p.atacar());
  });
}

// Uso
const miEjercito = [new Guerrero(), new Mago(), new Arquero()];
iniciarCombate(miEjercito);




//////////////////////////////////////////////////////////

class Pagador{
    // al colocarle el "#" auna variable o metodo estamos indicando que a esta variable o metodo no puede ser accedida fuera de la clase en la que fue creada, es decir que si luego creamos un objeto con la clase, de igual manera tampoco podremos acceder a lo que tenga ese "#" antes del nombre
    #privado=false;

    publico=true;
    pagar(){
        console.log("pago ORIGINAL en efectivo", this.publico)
    }

    // el get permite que desde este metodo podamos acceder a una variable privada desde fuera de la clase en donde fue creada, esto se hace con el objetivo de mantener un control estricto sobre lo privado
    get privada(){
     return this.#privado;
    }

    // el set nos permite manipular la variable privada desde afuera, nuevamente esto se hace con el objetivo de tener un control estricto sobre lo privado
    set no_privado(booleano){
        this.#privado=booleano;
        console.log(this.#privado)
        return;
    }

}

class Strype extends Pagador{
    pagar(){
        // para acceder a un metodo "get" no es necesario los parentesis, se accede como si fuese una variable comun y corriente (siendo que este es un metodo en este caso)
        console.log(`esta es la variable privada ${this.privada}`);
        console.log("pago con Strype")
    }
}

class Paypal extends Pagador{
    pagar(){
        console.log("pago con Paypal")
    }
}

class Klarna extends Pagador{
    pagar(){

        // para enviar un parametro a un metodo "set" es usandolo como si se tratase de una variable y no como un metodo, es decir se le dice "=valor" en vez de (valor) para que este perciba los valores
        this.no_privado=true;
        console.log("pago con Klarna")
    }
}


function metodo_pago(MP){
    // la funcion recibe el arreglo de objetos y luego lo recorre con un forEach
    MP.forEach((item, index)=>{
        // item representa cada objeto dentro del recorrido y como cada objeto tiene el metodo "pagar" entonces este metodo se ejecuta por si solo en cada iteración
        item.pagar();
    })
}

// el polimorfismo se refiere a los casos en donde los hijos sustituyen el metodo del padre para su uso conveniente
// aunque el metodo del padre y del hijo tengan el mismo nombre, ambos ejecutan acciones diferentes 
// en este caso tanto el padre como los hijos usan el metodo "pagar" para ejecutarlos todos de manera dinamica evitamos llamar a cada uno y ejecutar su metodo, mas bien creamos un arreglo en donde encerramos a todos los objetos y luego los recorremos con un forEach para asi ejecutar dinamicamente el metodo correspondiente que en este caso es el "pagar"

const array_pago=[new Strype, new Paypal, new Klarna, new Pagador];

// llamamos la funcion "metodo_pago" para enviarle como parametro el arreglo de objetos "array_pago", que contiene la creacion de cada clase de objeto (new Paypal, new Stripe, etc)
metodo_pago(array_pago)


////////////////////////////////////////////////////////////////

class get_set{

    set setter(valor){
        this._setter = valor;
    }

    get getter(){
        return "valor"
    }

}