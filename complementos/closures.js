function crearSaludo(finalDeFrase) {
		return function (nombre) {

				console.log(`Hola ${nombre} ${finalDeFrase}`)
		}
}

const SALUDO_ARGENTINO = crearSaludo('che')
const SALUDO_MEXICANO = crearSaludo('wey')
const SALUDO_COLOMBIANO = crearSaludo('amigo')

SALUDO_ARGENTINO('Alex')
SALUDO_MEXICANO('Alex')
SALUDO_COLOMBIANO('Alex')
