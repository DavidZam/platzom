# Platzom

Traductor del idioma inventado Platzom utilizado en el curso de "Fundamendos de Javascript" de Platzi.

## Descripción del idioma
 - Termina en "ar" -> se le quitan los dos caracteres
 - Empieza con "z" -> se le añade "pe" al final
 - Si tiene 10 letras o más -> se parte por la mitad y se añade un guión
 - Si es un palindromo -> Se reescribe alternando minusculas y mayusculas sin tener en cuenta reglas anteriores

 ## Instalación

```npm install platzom```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program 
platzom("Zorro"); // Zorrope
platzom("Zarpar"); // Zarppe
platzom("Abecedario"); // abece-dario
platzom("sometemos"); // SoMeTeMoS
```

## Licencia

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)