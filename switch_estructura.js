// Para preguntarle algo al usuario ocupamos la sentencia prompt

let signo = prompt('Cual es tu signo')

let mostrar = document.getElementById('id_horoscopo')

//if(signo.toUpperCase() == 'LEO')
//{
//		mostrar.innerHTML = 'Debe comprender que los objetivos necesitan su tiempo. Ármese de paciencia y trate de resolverlos uno por uno, de lo contrario, no alcanzará ninguno.'
//}

switch(signo.toLowerCase()){
		case 'leo':
				mostrar.innerHTML = 'Debe comprender que los objetivos necesitan su tiempo. Ármese de paciencia y trate de resolverlos uno por uno, de lo contrario, no alcanzará ninguno.'
		break;

		case 'tauro':
				mostrar.innerHTML = 'Momento para que vea con quién se rodea. Sepa que podrían acercarse a usted personas poco creíbles que atenten contra sus ideas y pensamientos.'
		break;

		default:
				mostrar.innerHTML = 'Tu horozcopo no fue encontrado'

}
