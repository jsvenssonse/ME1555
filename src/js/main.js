import { defaultTheme } from './themes/defaultTheme';
import { request } from './components/api.js';
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
                           <span class="post right">Post</span>
                           <select class="language right">
                            <option value="javascript">Javascript</option>
                            <option value="php">PHP</option>
                            <option value="python">Python</option>
                            <option value="java">java</option>
                          </select>
                         </div>
                         <div id="codeWrap">
                           <textarea id="code" placeholder="Write your code here!"></textarea>
                         </div>
                       </div>`;
       let appDiv = document.querySelector('#container');
       if(appDiv){
           appDiv.innerHTML = template;
           defaultTheme();
       } else {
         console.log('div #container not found');
         return;
       }
     }

   }

   window.addEventListener('load', () => new Main());
