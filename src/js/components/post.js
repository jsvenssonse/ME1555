export function postFunc(codeLanguage, code) {
    console.log(codeLanguage);
    console.log(code);
    kevinFunc(codeLanguage);
};

function kevinFunc(language) {
  console.log('language: ' + language);
}
