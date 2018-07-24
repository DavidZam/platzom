'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    // Si es un palindromo -> Se reescribe alternando minusculas y mayusculas sin tener en cuenta reglas anteriores
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    }; // Join pega los chars en un nuevo str
    function minMay(str) {
        var wordlength2 = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < wordlength2; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }

    // Termina en "ar" -> se le quitan los dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    // Empieza con "z" -> se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += "pe";
    }

    // Si tiene 10 letras o más -> se parte por la mitad y se añade un guión
    var wordlength = translation.length;
    if (wordlength >= 10) {
        var firsthalf = translation.slice(0, Math.round(wordlength / 2));
        var secondhalf = translation.slice(Math.round(wordlength / 2)); // Sin 2o parametro es hasta el final
        translation = firsthalf + '-' + secondhalf;
    }

    return translation;
}

platzom("Programar");
platzom("Zorro");
platzom("Zarpar");
platzom("Abecedario");
platzom("sometemos");