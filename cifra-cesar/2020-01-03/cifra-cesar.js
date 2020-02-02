let cesarcifra = {
    cifrar: function(palavra){
        let alfabeto = cesarcifra.gerarAlfabeto()

        let retorno = ""
        for (let posicao = 0; posicao < palavra.length; posicao++) {
            let letra = palavra[posicao];
            retorno += cesarcifra.cifraLetraDoAlfabeto(letra,alfabeto)
        }
        return retorno
    },
    cifraLetraDoAlfabeto: function(letra,alfabeto){
        if (letra === " ") {
            return letra
        }
        const ehMaiuscula = alfabeto.indexOf(letra) < 0
        if (ehMaiuscula) letra = letra.toLowerCase()

        const posicaoAtual = alfabeto.indexOf(letra)            
        const posicaoCifrada = posicaoAtual + 3

        if (ehMaiuscula) {
            return alfabeto[posicaoCifrada].toUpperCase()
        }
        return alfabeto[posicaoCifrada]
    },
    gerarAlfabeto: function(){
        return 'abcdefghijklmnopqrstuvwxyz'+
            'abcdefghijklmnopqrstuvwxyz'
    }
}

module.exports = cesarcifra