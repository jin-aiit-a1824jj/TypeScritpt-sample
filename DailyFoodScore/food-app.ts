class Score {}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click');
  }
}

class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  constructor() {
    this.elements.forEach(element =>{
      new Food(element);
    })
  }
}
const foods = new Foods();