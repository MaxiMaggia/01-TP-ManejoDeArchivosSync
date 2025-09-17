import fs from 'fs'
import path from 'path'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export const leerArchivoComoString = ruta => {
    try {
        const abs = path.resolve(process.cwd(), ruta)
        return fs.readFileSync(abs, 'utf-8')
    } catch (error) {
        throw new Error(`Error en lectura sincrónica: ${error.message}`)
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
export const escribirTextoEnArchivo = (ruta, texto, shouldCreateIfNotExists) => {
    try {
        const abs = path.resolve(process.cwd(), ruta)
        const dir = path.dirname(abs)

        if(!fs.existsSync(dir)) {
            throw new Error('el directorio no existe')
        }

        const existeArchivo = fs.existsSync(abs)
        if(!existeArchivo && !shouldCreateIfNotExists) {
            throw new Error('el archivo no existe')
        }

        fs.writeFileSync(abs, texto, { encoding: 'utf-8' })
    } catch (error) {
        throw new Error(`Error en escritura sincrónica: ${error.message}`)
    }
}

// exportar ambas funciones