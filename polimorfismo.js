export class Padre{
    metodo(){
        console.log("prueba_padre")
    }
}

export class Hijo extends Padre{

    metodo(){
        console.log("prueba_hijo")
    }
}