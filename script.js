/*   Variáveis   */
// Telas
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

// Botões
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

// Número randômico
let randomNumber = Math.round(Math.random() * 10)

// Número de tentativas do usuário
let xAttempts = 1 



/*   Eventos   */

// Evento do click na primeira tela
btnTry.addEventListener('click', handleTryClick)

// Evento do click na segunda tela
btnReset.addEventListener('click', handleResetClick)



/*   Funções   */

// Função para conferir se o número digitado é igual ao randômico
function handleTryClick(event) {
  event.preventDefault() 

  const inputNumber = document.querySelector('#inputNumber')

  
  if (Number(inputNumber.value) == randomNumber) {
   toggleScreen()

   document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  // "Zerar" o input a cada tentativa do usuário
  inputNumber.value = ""

  // Aumentando em 1 a quantidade de tentativas a cada erro do usuário
  xAttempts++ 
}

// Função "Jogar novamente"
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

// Função para alteração automática de telas 
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

