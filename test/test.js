const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {

    it('Termina en "ar" -> se le quitan los dos caracteres', function() {
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })

    it('Empieza con "z" -> se le añade "pe" al final', function() {
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })

    it('Si tiene 10 letras o más -> se parte por la mitad y se añade un guión', function() {
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('Si es un palindromo -> Se reescribe alternando minusculas y mayusculas sin tener en cuenta reglas anteriores', function() {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })

})