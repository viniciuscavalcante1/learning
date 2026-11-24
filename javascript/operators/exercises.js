// Exercícios: operadores em JavaScript
// Conteúdo: + - * /, > < == !=, && || !, e o que já viu (var, console.log, tipos).
// Tema: o herói do RPG vai pra primeira batalha.
// Cada exercício continua o anterior, então faz tudo neste arquivo.

// ========== ESCREVA O CÓDIGO ==========

// 1. O herói começa com `hp` 100. Um goblin dá 35 de dano.
//    Declare `hp` e `damage`, reatribua `hp` subtraindo o dano
//    e mostre `HP: 65`.
var hp = 100
var damage = 35
hp = hp - damage
console.log('HP:', hp)

// 2. Ele vence e ganha 3 sacos com 25 moedas cada. Declare `gold` com 50,
//    some 3 * 25 e mostre `Ouro: 125`.
var gold = 50
gold = gold + (3 * 25)
console.log('Ouro:', gold)

// 3. Ele divide o ouro igualmente com um parceiro. Declare `share` com
//    `gold` dividido por 2 e mostre `Cada um fica com: <valor>`.
var share = gold / 2
console.log('Cada um fica com:', share)

// 4. A porta do castelo só abre pra quem tem nível maior que 5.
//    Declare `level` com 3 e mostre `Porta abre? <valor>` usando `>`.
var level = 3
console.log('Porta abre?', level > 5)

// 5. O herói tá em perigo se o `hp` for menor que 70.
//    Mostre `Em perigo? <valor>` usando `<`.
console.log('Em perigo?', hp < 70)

// 6. A senha do baú é 42. Declare `guess` com 41 e mostre
//    `Acertou? <valor>` usando `==` e depois `Errou? <valor>` usando `!=`.
var guess = 41
console.log('Acertou?', guess == 42)
console.log('Errou?', guess != 42)

// 7. Ele só pode comprar a espada se tiver mais de 100 de ouro
//    E estiver vivo. Declare `isAlive` com true e mostre
//    `Pode comprar? <valor>` usando `&&`.
//    Bônus: mostre `Precisa descansar? <valor>`, que é true se o hp for
//    menor que 70 OU ele não estiver vivo (use `||` e `!`).
var isAlive = true
console.log('Pode comprar?', isAlive && gold > 100)
console.log('Precisa descansar?', hp < 70 || !isAlive)

// ========== O QUE APARECE NO CONSOLE? ==========
// Escreva sua resposta antes de rodar. Depois tira o /* */ e confere.

// 8.
var attack = 10
var bonus = 5
console.log(attack + bonus * 2) // 20
console.log(attack - bonus > 3) // true


// 9.
var potions = 0
var hasShield = true
console.log(potions > 0 || hasShield) // true
console.log(potions > 0 && hasShield) // false
console.log(!hasShield) // false


// 10.
var key = 7
console.log(key == 7) // true
console.log(key != 7) // false
key = 8
console.log(key == 7, key != 7) // false, true
