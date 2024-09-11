const cpf = "111.111.111-11"
const cpfArray = cpf.replace(/[\.-]/g, '').split('').map(Number)
const conta1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
const conta2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

function validadorCpf () {
    let soma1 = 0
    
    for (let i = 0; i < conta1.length; i++) {
        soma1 += cpfArray[i] * conta1[i]
    }
    
    let result = (soma1 * 10) % 11
    
    if (result === 10 || result === 11) {
        result = 0
    } 

    return result
}   

function validadorCpf2 () {
    let soma2 = 0

    for (let j = 0; j < conta2.length; j++) {
        soma2 += cpfArray[j] * conta2[j]
    }
    
    let result2 = (soma2 * 10) % 11

    if (result2 === 10 || result2 === 11) {
        result2 = 0
    }

    return result2
}

const todosDigitosIguais = cpfArray.every(digit => digit === cpfArray[0])

if (todosDigitosIguais) {
    console.log(`O CPF ${cpfArray.slice(0, 3).join('')}.${cpfArray.slice(3, 6).join('')}.${cpfArray.slice(6, 9).join('')}-${cpfArray.slice(9, 11).join('')} NÃO é VÁLIDO!`);
} else if (validadorCpf() === cpfArray[9] && validadorCpf2() === cpfArray[10]) {
    console.log(`O CPF ${cpfArray.slice(0, 3).join('')}.${cpfArray.slice(3, 6).join('')}.${cpfArray.slice(6, 9).join('')}-${cpfArray.slice(9, 11).join('')} é VÁLIDO!`);
} else {
    console.log(`O CPF ${cpfArray.slice(0, 3).join('')}.${cpfArray.slice(3, 6).join('')}.${cpfArray.slice(6, 9).join('')}-${cpfArray.slice(9, 11).join('')} NÃO é VÁLIDO!`);
}