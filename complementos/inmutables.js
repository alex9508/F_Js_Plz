const ALEX = {
		nombre: 'Alejandor',
		apellido: 'Hernandez',
		edad: 25
}

const CUMPLEANIOS_INMUTABLE = persona => ({
		...persona,
		edad: persona.edad + 1
})
