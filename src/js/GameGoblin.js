import goblinImage from '../img/goblin.png';
import Field from './FieldClass';
import createOutput from './resultOutput';
import Character from './Character';

export default class GameGoblin {
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

    const newCharacter = new Character(goblinImage, this.cells);
    this.character = document.querySelector('.character');
    console.log(newField);
    console.log(newCharacter);

    this.output = createOutput();

    setInterval(() => {
      const randomCell = this.cells[Math.floor(Math.random() * (this.size ** 2))];

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

    this.field.addEventListener('click', (event) => {
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
