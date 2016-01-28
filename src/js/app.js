  class App {
    constructor() {
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
                          <textarea placeholder="Write your code here!"></textarea>
                        </div>
                      </div>`;
      let appDiv = document.querySelector('#container');
      if(appDiv){
          appDiv.innerHTML = template;
      } else {
        console.log('div #container not found');
        return;
      }
    }

  }

  window.addEventListener('load', () => new App());
