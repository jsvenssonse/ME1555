import { defaultTheme } from './themes/defaultTheme';
import { request } from './components/api.js';
let button =  document.getElementById('button');
class Main {
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
                           <textarea id="code" placeholder="Write your code here!"></textarea>
                         </div>
                         <button id="button">Submit</button>
                       </div>`;
       let appDiv = document.querySelector('#container');
       if(appDiv){
           appDiv.innerHTML = template;
           defaultTheme(); 
       } else {
         console.log('div #container not found');
         return;
       }
       // Why is the button not loading in after the document is loaded?
     console.log(button);
    }
     
   }
   
   window.addEventListener('load', () => new Main());
