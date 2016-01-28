  class App {
    constructor() {
        this.button = document.getElementById('clickFunction');

        this.button.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
      console.log('This is working!');
    }
  }

  window.addEventListener('load', () => new App());
