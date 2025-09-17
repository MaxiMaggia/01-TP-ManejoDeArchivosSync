import { leerArchivoComoString, escribirTextoEnArchivo } from './utils/fileUtils.js'
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './utils/transformUtils.js'
import { combinarDosArrays, combinarNArrays } from './apareo.js'

console.log('--> Inicio index')

// leo los 4 archivos a memoria
const textoSetA   = leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setA).in')
const textoSetB   = leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setB).in')
const textoImpar  = leerArchivoComoString('in/imparesOrdenadosEntre1y999.in')
const textoPar    = leerArchivoComoString('in/paresOrdenadosEntre2y1000.in')


// preparo los 4 arrays a partir de los archivo leidos
const setA  = transformarStringEnArrayDeNumeros(textoSetA, ',')
const setB  = transformarStringEnArrayDeNumeros(textoSetB, ',')
const imp   = transformarStringEnArrayDeNumeros(textoImpar, ',')
const par   = transformarStringEnArrayDeNumeros(textoPar, ',')


// combino los primeros dos arrays
const combinadoAB = combinarDosArrays(setA, setB)
const combinadoABStr = transformarArrayDeNumerosAUnSoloString(combinadoAB, ',')
escribirTextoEnArchivo('out/combinado.out', combinadoABStr, true)


// combino los cuatro arrays
const combinadoTOTAL = combinarNArrays([ setA, setB, imp, par ])
const combinadoTOTALStr = transformarArrayDeNumerosAUnSoloString(combinadoTOTAL, ',')
escribirTextoEnArchivo('out/combinado2.out', combinadoTOTALStr, true)

console.log('--> Fin index')
