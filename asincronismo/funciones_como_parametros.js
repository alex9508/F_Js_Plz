class persona {
		constructor(nombre, apellido, altura){
		this.nombre = nombre,
		this.apellido = apellido,
		this.altura = altura
		}

		saludar(fn){
				let { nombre, apellido } = this
				console.log(`Hola, me llamo ${nombre} ${apellido}`)
				if(fn){
						fn(nombre, apellido)
				}
		}

		esAlto(){
				return this.altura > 1.8
		}
}

class Desarrollador extends persona {
		constructor(nombre, apellido, altura){
				super(nombre,apellido,altura)
		}
		saludar(fn){
				let { nombre, apellido} = this
				console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
				if(fn){
						fn(nombre, apellido, true)
				}
		} 
}

function responderSaludo(nombre, apellido, esDev){
		console.log(`Buen dia ${nombre} ${apellido}`)
		if(esDev){
				console.log(`Ah mirá, no sabia que eras desarrollador/a`)
		}
}

let alex = new persona('Alejandro', 'Hernandez', 1.70)
let pedro = new Desarrollador('Pedro', 'Perez', 1.73)
let rosa = new persona('Rosa', 'Rodriguez', 1.60)
let karen = new Desarrollador('Karen', 'Hernandez', 1.83)

alex.saludar()
pedro.saludar()
rosa.saludar(responderSaludo)
karen.saludar(responderSaludo)

