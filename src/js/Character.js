export default class Character {
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
