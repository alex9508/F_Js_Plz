function heredaDe(prototipoHijo, prototipoPadre){
		let fn = function () {}
		fn.prototype = prototipoPadre.prototype
		prototipoHijo.prototype = new fn
		prototipoHijo.prototype.constructor = prototipoHijo
} 

function persona(nombre, apellido, altura){
		this.nombre = nombre,
		this.apellido = apellido,
		this.altura = altura
}

let alex = new persona('Alejandro', 'Hernandez', 1.70)
let pedro = new persona('Pedro', 'Perez', 1.73)
let rosa = new persona('Rosa', 'Rodriguez', 1.60)
let karen = new persona('Karen', 'Hernandez', 1.83)


persona.prototype.saludar = function(){

		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.esAlto = function(){
		if(this.altura < 1.80)
		{
				console.log(`${this.nombre} es una persona bajita`)
		}else{
				console.log(`${this.nombre} es una persona Alta`)
				
		}
}


console.log(alex.saludar())
console.log(alex.esAlto())
console.log(karen.saludar())
console.log(karen.esAlto())



/* CLASE 24 LA VERDAD OCULTA DE LAS CLASES */

function Desarrollador(nombre, apellido){
		this.nombre = nombre
		this.apellido = apellido
}


heredaDe(Desarrollador, persona)

Desarrollador.prototype.saludar = function () {

		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

let alvaro = new Desarrollador('Alvaro', 'Juarez', 1.65)
console.log(alvaro.saludar())
console.log(alvaro.esAlto())



