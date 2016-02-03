export function postFunc(codeLanguage, code) {
    var codeWrapper = document.querySelector('#codeWrapper');
    codeWrapper.innerHTML = `<pre><code class="language-${codeLanguage}">
                                  ${code}
                            </code></pre>`;


    kevinFunc(codeLanguage);
};

function kevinFunc(language) {
  console.log('language: ' + language);
  console.log('Pulla för fan!');
}
