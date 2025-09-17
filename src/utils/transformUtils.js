/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
export const transformarStringEnArrayDeNumeros = (str, separador) => {
    const partes = String(str).split(separador)
    const resultado = []

    for(const p of partes) {
        const t = p.trim()
        if(t === '') continue
        const n = Number(t)
        if(Number.isFinite(n)) resultado.push(n)
    }
    return resultado
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
export const transformarArrayDeNumerosAUnSoloString = (arr, separador) => {
    return arr.map(n => String(n)).join(separador)
}

// exportar ambas funciones