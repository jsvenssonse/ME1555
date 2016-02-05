export function postFunc(codeLanguage, code) {
    var codeWrapper = document.querySelector('#codeWrapper');
    codeWrapper.innerHTML = `<pre><code id="codehiglight" class="language-${codeLanguage}">
                                  ${code}
                            </code></pre>`;
    console.log(codeLanguage);
    console.log(code);
    Prism.highlightElement(document.getElementById('codehiglight'));
    post(codeLanguage);
};

function post(language) {
    let http = new XMLHttpRequest();
    http.open("POST", "http://88.131.100.231:81", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(language);
    http.send(language);
}
