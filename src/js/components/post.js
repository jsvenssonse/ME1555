export function postFunc(codeLanguage, code) {
    var codeWrapper = document.querySelector('#codeWrapper');
    codeWrapper.innerHTML = `<pre><code class="language-${codeLanguage}">
                                  ${code}
                            </code></pre>`;
    var id = Math.floor((Math.random() * 10000) + 1);
    localStorage.setItem(id, code);
    for (var i = 0; i <= localStorage.length; i++) {
      if(localStorage.getItem(localStorage.key(i)) == null || localStorage.getItem(localStorage.key(i)) == ''){
        return false;
      }
      console.log(localStorage.getItem(localStorage.key(i)));
    }
    kevinFunc(codeLanguage);
};

function kevinFunc(language) {
  console.log('language: ' + language);
  console.log('Pulla för fan!');
}
