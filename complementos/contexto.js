const alex = {
		nombre: 'Alejandro',
		apellido: 'Hernandez'
}

function saludar(saludo = 'Hola') {

		console.log(` ${saludo}, mi nombre es ${this.nombre} `)
}

//const saludarAAlex = saludar.bind(alex)

//setTimeout(saludar.bind(alex, 'Hola Wey'), 1000)

//saludar.call(alex, 'Hola wey')

saludar.apply(alex, [ 'Hola Wey' ])

//La diferencia de apply con call, es que apply ocupa un array
