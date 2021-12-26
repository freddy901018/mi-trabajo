class Display {
    constructor (displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora ();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "*",
            dividir: "/",
        }
    }

    borrarTodo () {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores ();
    }

    calcular () {
        const valorAnterior = parseFloat (this.valorAnterior); 
        const valorActual = parseFloat (this.valorActual);

        if ( isNaN (valorActual) || isNaN (valorAnterior) ) return
        this.valorActual = this.calculador [this.tipoOperacion] (valorAnterior, valorActual);
    }

    computar (tipo) {
        this.tipoOperacion !== "igual" &&  this.calcular ();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual ="";
        this.imprimirValores ();
    }

    agregarNumero (numero) {
        this.valorActual = this.valorActual.toString () + numero.toString ();
        this.imprimirValores ();
    }
    

    imprimirValores () {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos [this.tipoOperacion] || ""}`;
    }

    
}
