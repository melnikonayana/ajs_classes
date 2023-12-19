export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (name.length < 2 || name.length > 10) {
      throw new Error('The name must be between 2 and 10 characters long')
    }

    if (typeof name !== 'string') {
      throw new Error('Name must be a string')
    }

    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) === -1) {
      throw new Error('There is no such hero');
    }
  }
  }
