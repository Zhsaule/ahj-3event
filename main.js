/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/FieldClass.js
class Field {
  constructor(size) {
    this.size = size;
    this.createField();
  }
  createField() {
    const field = document.createElement('div');
    field.className = 'field';
    for (let i = 0; i < this.size ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('id', i);
      field.append(cell);
    }
    document.body.appendChild(field);
    return field;
  }
}
;// CONCATENATED MODULE: ./src/js/resultOutput.js
function createOutput() {
  const output = document.createElement('div');
  output.classList = 'output';
  const resultDiv = document.createElement('div');
  resultDiv.textContent = 'Успех: ';
  output.appendChild(resultDiv);
  const result = document.createElement('span');
  result.className = 'success';
  result.textContent = 0;
  resultDiv.appendChild(result);
  const attemptDiv = document.createElement('div');
  attemptDiv.textContent = 'Попытки: ';
  output.appendChild(attemptDiv);
  const attempt = document.createElement('span');
  attempt.className = 'attempt';
  attempt.textContent = 0;
  attemptDiv.appendChild(attempt);
  document.body.appendChild(output);
  return {
    result,
    attempt
  };
}
;// CONCATENATED MODULE: ./src/js/Character.js
class Character {
  constructor(goblinImage, cells) {
    this.goblinImage = goblinImage;
    this.cells = cells;
    this.createCharacter();
  }
  createCharacter() {
    const character = document.createElement('img');
    character.src = this.goblinImage;
    character.classList.add('character');
    this.cells[0].appendChild(character);
    return character;
  }
}
;// CONCATENATED MODULE: ./src/js/GameGoblin.js




class GameGoblin {
  constructor(size, attempts) {
    this.size = size;
    this.attempts = attempts;
    this.field = undefined;
    this.cells = undefined;
    this.output = undefined;
    this.character = undefined;
    this.attempt = 0;
    this.successfulAttempts = 0;
    this.startGame();
  }
  startGame() {
    const newField = new Field(this.size);
    this.field = document.querySelector('.field');
    this.cells = document.querySelectorAll('.cell');
    const newCharacter = new Character(goblin_namespaceObject, this.cells);
    this.character = document.querySelector('.character');
    console.log(newField);
    console.log(newCharacter);
    this.output = createOutput();
    setInterval(() => {
      const randomCell = this.cells[Math.floor(Math.random() * this.size ** 2)];
      if (randomCell !== this.character.parentElement) {
        this.attempt += 1;
        this.output.attempt.textContent = this.attempt;
        randomCell.appendChild(this.character);
      }
      if (this.attempts === this.attempt) {
        alert(`Игра закончена! Ваш результат ${this.successfulAttempts} гоблинов!`);
        this.attempt = 0;
        this.successfulAttempts = 0;
        this.output.result.textContent = this.attempt;
        this.output.attempt.textContent = this.successfulAttempts;
      }
    }, 1000);
    this.field.addEventListener('click', event => {
      const clickedCell = event.target;
      if (clickedCell.classList.contains('character')) {
        clickedCell.style.backgroundColor = 'green';
        this.successfulAttempts += 1;
        this.output.result.textContent = this.successfulAttempts;
      } else {
        clickedCell.style.backgroundColor = 'red';
      }
      setTimeout(() => {
        clickedCell.removeAttribute('style');
      }, 200);
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// Импорт

const gameGoblin = new GameGoblin(4, 5);
console.log(gameGoblin.output);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;