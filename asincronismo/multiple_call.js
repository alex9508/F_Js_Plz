const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

const ON_PEOPLE_RESPONSE = function (person)  {
		console.log(`Hola yo soy, ${person.name}`)
}

function obtenerPersonaje(id){
		const URL_GENERAL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$.get(URL_GENERAL, OPTS, ON_PEOPLE_RESPONSE)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
