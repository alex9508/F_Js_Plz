const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }


function obtenerPersonaje(id){
		return new Promise((resolve, reject) => {
		const URL_GENERAL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$
						.get(URL_GENERAL, OPTS, function(data){
								resolve(data)
						})
						.fail(() => reject(id))
		})
}

function onError(id){
		console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
		let ids = [1,2,3,4,5,6,7]
		let promesas = ids.map(id => obtenerPersonaje(id))
		try{
				let personajes = await Promise.all(promesas)
				console.log(personajes)
		}catch(id){
				onError(id)
		}
}

obtenerPersonajes() 
