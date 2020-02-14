let cesarcifra = {
    cifrar: function(palavra){
        let alfabeto = cesarcifra.getAlfabeto()

        let retorno = ""
        for (let posicao = 0; posicao < palavra.length; posicao++) {
            let letra = palavra[posicao];
            
            const ehMaiuscula = alfabeto.indexOf(letra) < 0
    
            if (ehMaiuscula) letra = letra.toLowerCase()

            const posicaoAtual = alfabeto.indexOf(letra)            
            const posicaoCifrada = posicaoAtual + 3
   
            retorno += alfabeto[posicaoCifrada]

            if (ehMaiuscula) retorno = retorno.toUpperCase()
        }
        return retorno
    },
    getAlfabeto: function() {
        return 'abcdefghijklmnopqrstuvwxyz' +
            'abcdefghijklmnopqrstuvwxyz';
    }
}

module.exports = cesarcifra