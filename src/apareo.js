/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export const combinarDosArrays = (arrA, arrB) => {
    const res = []
    let i = 0, j = 0

    while(i < arrA.length || j < arrB.length) {
        let val

        if(j >= arrB.length || (i < arrA.length && arrA[i] < arrB[j])) {
            val = arrA[i++]
        } else if(i >= arrA.length || arrA[i] > arrB[j]) {
            val = arrB[j++]
        } else { 
            val = arrA[i]
            i++
            j++
        }

        if(res.length === 0 || res[res.length - 1] !== val) res.push(val)
    }
    return res
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
export const combinarNArrays = arrs => {
    let acc = []
    for(const arr of arrs) {
        acc = combinarDosArrays(acc, arr)
    }
    return acc
}

// exportar ambas funciones