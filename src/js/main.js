import { defaultTheme } from './themes/defaultTheme.js';
import { requestBody } from './components/api.js';
class Main {
     constructor() {
         this.buildUi();
     }

     buildUi(){
        let template = `
                        <form action="" name="form" id="form">
                            <div id="appContainer">
                                <div id="top-section">
                                    <span class="icon">1</span>
                                    <span class="icon">2</span>
                                    <span class="icon">3</span>
                                    <span class="icon">4</span>
                                    <button id="submit" name="submit" class="post right">Post</button>
                                    <select class="language right" name="lang" id="lang">
                                        <option value="javascript">Javascript</option>
                                        <option value="php">PHP</option>
                                        <option value="python">Python</option>
                                        <option value="java">java</option>
                                    </select>
                                </div>
                                <div id="codeWrap">
                                    <textarea id="code" placeholder="Write your code here!"></textarea>
                                </div>
                            </div>
                        </form>
                        `;
       let appDiv = document.querySelector('#container');
       if(appDiv){
           appDiv.innerHTML = template;
           defaultTheme();
       } else {
         console.log('div #container not found');
         return;
       }

         if(appDiv) {
            appDiv.addEventListener('submit', requestBody);
         }
         
            
        }
     }
     
 

   window.addEventListener('load', () => new Main());
