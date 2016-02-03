export function defaultTheme () {
  const appContainer = document.querySelector('#appContainer');
  const topSection = document.querySelector('#top-section');
  const codeWrap = document.querySelector('#codeWrap');
  const textarea = document.querySelector('#code');
  const icon = document.querySelectorAll('.icon');
  const post = document.querySelector('.post');
  const language = document.querySelector('.language');
  const right = document.querySelector('.right');
  const codeeditor = document.querySelector('#codeeditor');
  
  //codeeditor
  codeeditor.style.height = '400px';
  codeeditor.style.width = '100%';
  
  //AppContainer styles
  appContainer.style.height = '100%';
  appContainer.style.width = '100%';
  appContainer.style.backgroundColor = 'rgb(42, 45, 46)';

  //TopSection styles
  topSection.style.height = '40px';
  topSection.style.width = '100%';
  topSection.style.borderBottom = '1px solid rgb(130, 130, 130)';
  topSection.style.margin = '10px 0px 10px 0px';

  //CodeWrap styles
  codeWrap.style.height = 'calc(100% - 50px)';
  codeWrap.style.width = '100%';

  //TextArea styles
  textarea.style.height = '95%';
  textarea.style.width = '97%';
  textarea.style.margin = '0px 15px 0px 10px';
  textarea.style.resize = 'none';
  textarea.style.outline = 'none';
  textarea.style.border = 'none';
  textarea.style.backgroundColor = 'rgb(42, 45, 46)';
  textarea.style.color = 'rgb(130, 130, 130)';
  textarea.style.padding = '15px';

  // Post button styles
  post.style.height = '100%';
  post.style.width = '50px';
  post.style.background = 'orange';
  post.style.color = 'white';
  post.style.textAlign = 'center';
  post.style.lineHeight = '30px';
  post.style.textTransform = 'uppercase';

  // Language Selector styles
  language.style.height = '100%';
  language.style.width = '100px';

  //Float right fix
  right.style.cssFloat = 'right';

  //Icon styles
  for (var i = 0; i <= icon.length; i++) {
    if(typeof icon[i] === 'undefined'){
      return false;
    };
    icon[i].style.height = '100%';
    icon[i].style.width = '50px';
    icon[i].style.cssFloat = 'left';
    icon[i].style.padding = '0 10px 0 10px';
    icon[i].style.textAlign = 'center';
    icon[i].style.lineHeight = '40px';
    icon[i].style.color = 'white';
    //icon[i].style.border = '1px solid white';
  };

};
