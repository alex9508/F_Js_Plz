const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function obtenerPersonaje(id,callback){
		const URL_GENERAL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

		$.get(URL_GENERAL, OPTS, function (person) {
		console.log(`Hola yo soy, ${person.name}`)
				if(callback){
						callback()
				}
		})
}

obtenerPersonaje(1, function(){
		obtenerPersonaje(2,function(){
				obtenerPersonaje(3,function(){
						obtenerPersonaje(4)
				})
		})
})
