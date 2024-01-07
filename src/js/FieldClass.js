export default class Field {
  constructor(size) {
    this.size = size;
    this.createField();
  }

  createField() {
    const field = document.createElement('div');
    field.className = 'field';

    for (let i = 0; i < (this.size ** 2); i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('id', i);
      field.append(cell);
    }

    document.body.appendChild(field);
    return field;
  }
}
