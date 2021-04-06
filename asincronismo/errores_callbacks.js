const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function obtenerPersonaje(id,callback){
		const URL_GENERAL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

		$
				.get(URL_GENERAL, OPTS, callback)
				.fail(() => {
						console.log(`Sucedio un error. No se puede obtener el personaje ${id}`)
				})
}

obtenerPersonaje(1, function(person){
		console.log(`Hola yo soy, ${person.name}`)
		
		obtenerPersonaje(2,function(person){
				console.log(`Hola yo soy, ${person.name}`)
				
				obtenerPersonaje(3,function(person){
						console.log(`Hola yo soy, ${person.name}`)
						
						obtenerPersonaje(4,function(person){
								console.log(`Hola yo soy, ${person.name}`)
						})		
				})
		})
})
