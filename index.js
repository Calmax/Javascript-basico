//Inrodução ao Javascript

var s = " texto";
s.len = 4;
var t = s.len;

var o = {x:1}, p = {x:1}; // Dois objetos com as mesmas propriedades
o === p // => falso: objetos distintos nunca são iguais
var a = [], b = []; // Dois arrays vazios diferentes
a === b // => falso: arrays diferentes nunca são iguais


var a = []; // A variável a se refere a um array vazio.
var b = a; // Agora b se refere ao mesmo array.
b[0] = 1; // Muda o array referido pela variável b.
a[0] // => 1: a mudança também é visível por meio da variável a.
a === b // => verdadeiro: a e b se referem ao mesmo objeto; portanto, são iguais.

var a = ['a','b','c']; // Um array que queremos copiar
var b = []; // Um array diferente no qual vamos copiar
for(var i = 0; i < a.length; i++) { // Para cada índice de []
b[i] = a[i]; // Copia um elemento de a em b
}


function equalArrays(a,b) {
    if (a.length != b.length) return false; // Arrays de tamanho diferente não são
    // iguais
    for(var i = 0; i < a.length; i++) // Itera por todos os elementos
    if (a[i] !== b[i]) return false; // Se algum difere, os arrays não são
    // iguais
    return true; // Caso contrário, eles são iguais
    }


var scope = "global"; // Declara uma variável global
function checkscope() {
var scope = "local"; // Declara uma variável local com o mesmo nome
return scope; // Retorna o valor local, não o global
}
checkscope() // => "local"

scope = "global"; // Declara uma variável global, mesmo sem var.
function checkscope2() {
scope = "local"; // Opa! Simplesmente alteramos a variável global.
myscope = "local"; // Isso declara uma nova variável global implicitamente.
return [scope, myscope]; // Retorna dois valores.
}
checkscope2() // => ["local", "local"]: tem efeitos colaterais!
scope // => "local": a variável global mudou.
myscope // => "local": namespace global desordenado.

var scope = "global scope"; // Uma variável global
function checkscope() {
var scope = "local scope"; // Uma variável local
function nested() {
var scope = "nested scope"; // Um escopo aninhado de variáveis locais
return scope; // Retorna o valor em scope aqui
}
return nested();
}
checkscope() // => "nested scope"