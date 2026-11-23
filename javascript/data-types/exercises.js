// Exercícios: tipos de dados em JavaScript
// Conteúdo: var, console.log, string, number, boolean, null e undefined.
// Tema: você tá criando o personagem de um jogo de RPG.
// Cada exercício continua o anterior, então faz tudo neste arquivo.
 
// ========== ESCREVA O CÓDIGO ==========
 
// 1. Seu herói precisa de nome. Declare `heroName` com um nome (string)
//    e mostre `Herói: <nome>` no Console.

var heroName = 'Vi'
console.log('Herói:', heroName)
 
// 2. Declare `level` com o número 1 e `gold` com 50.
//    Mostre `Nível 1 | Ouro 50` usando console.log com vários valores.
var level = 1
var gold = 50
console.log('Nível', level, '| Ouro', gold)
 
// 3. O herói ainda não escolheu uma classe. Declare `heroClass` sem valor
//    e mostre no Console. Que valor apareceu?
//    Resposta: undefined
var heroClass
console.log(heroClass) // undefined
 
// 4. Agora ele escolheu: atribua 'Mago' a `heroClass` e mostre de novo.
heroClass = 'Mago'
console.log(heroClass) // Mago
 
// 5. Declare `isAlive` com o boolean que faz sentido pra um herói que
//    acabou de nascer e mostre `Vivo? <valor>`.
var isAlive = true
console.log('Vivo?', isAlive)
 
// 6. O herói não tem pet. Declare `pet` deixando claro, de propósito, que
//    não tem nada ali, e mostre no Console. Use o tipo certo
//    (dica: não é o mesmo do exercício 3).
var pet = null
console.log(pet)
 
// 7. Ele achou um baú! Reatribua `gold` pra 120 e `level` pra 2, e mostre
//    a ficha completa numa linha só:
//    Herói: <nome> | Classe: Mago | Nível 2 | Ouro 120 | Vivo? true
gold = 120
level = 2
console.log('Herói:', heroName, '|', 'Classe:', heroClass, '|', 'Nível', level, '|', 'Ouro', gold, '|', 'Vivo?', isAlive)
 
// ========== O QUE APARECE NO CONSOLE? ==========
// Escreva sua resposta antes de rodar. Depois tira o /* */ e confere.
 
// 8.

var potion
console.log('Poção:', potion) // Poção: undefined
potion = 'cura'
console.log('Poção:', potion) // Poção: cura

// Resposta: undefined, cura
 
 
// 9.
var lives = 3
var gameOver = false
console.log(lives, gameOver) // 3 false
lives = 0
gameOver = true
console.log(lives, gameOver) // 0 true
// Resposta: 3 false, 0 true
 
 
// 10.
var a = '10'
var b = 10
console.log(a, b) // 10 10
console.log('O baú tem', b, 'moedas e a senha é', a) // 'O baú tem 10 moedas e a senha é 10'
// Resposta: 'O baú tem 10 moedas e a senha é 10'
 
// Bônus: no 10, `a` e `b` aparecem iguais no Console.
// Qual é a diferença entre eles?
// Resposta: São de tipos diferentes. '10' > string, 10 > number
 