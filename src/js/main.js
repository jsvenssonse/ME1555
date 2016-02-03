import prism from './libraries/prism.js';
import { postFunc } from './components/post';
import { defaultTheme } from './themes/defaultTheme';
class Main {
     constructor() {
         this.buildUi();
         console.log(prism);
     }

     buildUi(){
       let template = `<div id="appContainer">
                         <div id="top-section">
                           <span class="icon">1</span>
                           <span class="icon">2</span>
                           <span class="icon">3</span>
                           <span class="icon">4</span>
                           <span class="post right">Post</span>
                           <select class="language right" value="javascript">
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
       let appDiv = document.querySelector('#codeeditor');
       if(appDiv){
           appDiv.innerHTML = template;
           defaultTheme();
           let codeLanguage = document.querySelector('.language');
           let code = document.querySelector('#code');
           let post = document.querySelector('.post');
           post.addEventListener('click', function() {
             if (code.value === '') {
               return false;
             }
             postFunc(codeLanguage.value, code.value);
             //codeLanguage.value, code.value
           });
       } else {
         console.log('div #codeeditor not found');
         return;
       }
     }

   }

   window.addEventListener('load', () => new Main());
