let cesarcifra = {
    cifrar: function(palavra){
        let alfabeto = cesarcifra.getAlfabeto()

        let retorno = ""
        for (let posicao = 0; posicao < palavra.length; posicao++) {
            let letra = palavra[posicao];
            
            retorno += cesarcifra.letraDoAlfabetoCifrada(letra, alfabeto)
        }
        return retorno
    },
    getAlfabeto: function() {
        return 'abcdefghijklmnopqrstuvwxyz' +
            'abcdefghijklmnopqrstuvwxyz';
    },
    letraDoAlfabetoCifrada(letra, alfabeto, DESLOCAMENTO = 3) {
        let retorno = ""
        const ehMaiuscula = alfabeto.indexOf(letra) < 0
        if (ehMaiuscula) letra = letra.toLowerCase()

        const posicaoAtual = alfabeto.indexOf(letra)
        const posicaoCifrada = posicaoAtual + DESLOCAMENTO

        retorno = alfabeto[posicaoCifrada]
        if (ehMaiuscula) retorno = retorno.toUpperCase()
        return retorno
    }
}

module.exports = cesarcifra