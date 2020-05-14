class Score {
  get totalScore(){
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }
  render(){
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }

  private static instance:Score;
  private constructor(){}
  static getInstance(){
    if (!Score.instance)
    Score.instance = new Score();
    return Score.instance;
  }
}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler(){
    console.log(this);
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}

class Foods {

  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = [];
  get activeElements(){
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')){
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }


  private _activeElementsScore: number[] = [];
  get activeElementsScore(){
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore){
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach(element =>{
      new Food(element);
    })
  }

  private static instance:Foods;
  static getInstance(){
    if (!Foods.instance)
      Foods.instance = new Foods();
    return Foods.instance;
  }
}
const foods = Foods.getInstance();