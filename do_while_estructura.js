let contador = 0

const LLUEVE = () => Math.random() < 0.25

do{
		contador++
}while(!LLUEVE())

contador == 1 ?console.log(`Fui a ver si llovia ${contador} vez`):console.log(`Fui a ver si llovia ${contador} veces`)
