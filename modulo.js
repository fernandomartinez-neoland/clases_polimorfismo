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
    pagar(){
        console.log("pago ORIGINAL en efectivo")
    }
}

class Strype extends Pagador{
    pagar(){
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
        console.log("pago con Klarna")
    }
}


function metodo_pago(MP){
    MP.forEach((item, index)=>{
        item.pagar();
    })
}

// el polimorfismo conciste en los casos en donde los hijos sustituyen el metodo del padre para su uso conveniente
// aunque 

const array_pago=[new Strype, new Paypal, new Klarna, new Pagador];

metodo_pago(array_pago)
