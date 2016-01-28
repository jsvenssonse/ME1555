  class App {
    constructor() {
        this.button = document.getElementById('clickFunction');
        this.button.addEventListener('click', () => this.handleClick());
        this.buildUi();
    }

    buildUi(){
      let template = `<div id="appContainer">
                        <div id="top-section">
                          <span class="icon">1</span>
                          <span class="icon">2</span>
                          <span class="icon">3</span>
                          <span class="icon">4</span>
                        </div>
                        <div id="codeWrap">
                          <textarea></textarea>
                        </div>
                      </div>`
      let appDiv = document.querySelector('#container');
      if(appDiv){
          appDiv.innerHTML = template;
      } else {
        console.log('div #container not found');
        return;
      }
    }

    handleClick() {
      console.log('This is working!');
    }
  }

  window.addEventListener('load', () => new App());
