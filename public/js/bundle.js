/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _prism = __webpack_require__(1);

	var _prism2 = _interopRequireDefault(_prism);

	var _post = __webpack_require__(2);

	var _defaultTheme = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);

	    this.buildUi();
	    console.log(_prism2.default);
	  }

	  _createClass(Main, [{
	    key: 'buildUi',
	    value: function buildUi() {
	      var template = '<div id="appContainer">\n                         <div id="top-section">\n                           <span class="icon fa fa-bold"></span>\n                           <span class="icon fa fa-italic"></span>\n                           <span class="icon">3</span>\n                           <span class="icon">4</span>\n                           <span class="post right">Post</span>\n                           <span class="icon icon-code fa fa-file-code-o"></span>\n                           <select class="language right">\n                            <option value="javascript">Javascript</option>\n                            <option value="php">PHP</option>\n                            <option value="python">Python</option>\n                            <option value="java">java</option>\n                          </select>\n                         </div>\n                         <div id="codeWrap">\n                           <textarea id="code" placeholder="Write your code here!"></textarea>\n                         </div>\n                       </div>';
	      var appDiv = document.querySelector('#codeeditor');
	      if (appDiv) {
	        (function () {
	          appDiv.innerHTML = template;
	          (0, _defaultTheme.defaultTheme)();
	          var codeLanguage = document.querySelector('.language');
	          var code = document.querySelector('#code');
	          var post = document.querySelector('.post');
	          post.addEventListener('click', function () {
	            if (code.value === '') {
	              return false;
	            }

	            (0, _post.postFunc)(codeLanguage.value, code.value);
	            //codeLanguage.value, code.value
	          });
	        })();
	      } else {
	          console.log('div #codeeditor not found');
	          return;
	        }
	    }
	  }]);

	  return Main;
	}();

	window.addEventListener('load', function () {
	  return new Main();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */
	var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	    Prism = function () {
	  var e = /\blang(?:uage)?-(\w+)\b/i,
	      t = _self.Prism = { util: { encode: function encode(e) {
	        return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
	      }, type: function type(e) {
	        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
	      }, clone: function clone(e) {
	        var n = t.util.type(e);switch (n) {case "Object":
	            var a = {};for (var r in e) {
	              e.hasOwnProperty(r) && (a[r] = t.util.clone(e[r]));
	            }return a;case "Array":
	            return e.map && e.map(function (e) {
	              return t.util.clone(e);
	            });}return e;
	      } }, languages: { extend: function extend(e, n) {
	        var a = t.util.clone(t.languages[e]);for (var r in n) {
	          a[r] = n[r];
	        }return a;
	      }, insertBefore: function insertBefore(e, n, a, r) {
	        r = r || t.languages;var l = r[e];if (2 == arguments.length) {
	          a = arguments[1];for (var i in a) {
	            a.hasOwnProperty(i) && (l[i] = a[i]);
	          }return l;
	        }var o = {};for (var s in l) {
	          if (l.hasOwnProperty(s)) {
	            if (s == n) for (var i in a) {
	              a.hasOwnProperty(i) && (o[i] = a[i]);
	            }o[s] = l[s];
	          }
	        }return t.languages.DFS(t.languages, function (t, n) {
	          n === r[e] && t != e && (this[t] = o);
	        }), r[e] = o;
	      }, DFS: function DFS(e, n, a, r) {
	        r = r || {};for (var l in e) {
	          e.hasOwnProperty(l) && (n.call(e, l, e[l], a || l), "Object" !== t.util.type(e[l]) || r[e[l]] ? "Array" !== t.util.type(e[l]) || r[e[l]] || (r[e[l]] = !0, t.languages.DFS(e[l], n, l, r)) : (r[e[l]] = !0, t.languages.DFS(e[l], n, null, r)));
	        }
	      } }, plugins: {}, highlightAll: function highlightAll(e, n) {
	      for (var a, r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), l = 0; a = r[l++];) {
	        t.highlightElement(a, e === !0, n);
	      }
	    }, highlightElement: function highlightElement(n, a, r) {
	      for (var l, i, o = n; o && !e.test(o.className);) {
	        o = o.parentNode;
	      }o && (l = (o.className.match(e) || [, ""])[1], i = t.languages[l]), n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = n.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var s = n.textContent,
	          u = { element: n, language: l, grammar: i, code: s };if (!s || !i) return t.hooks.run("complete", u), void 0;if (t.hooks.run("before-highlight", u), a && _self.Worker) {
	        var c = new Worker(t.filename);c.onmessage = function (e) {
	          u.highlightedCode = e.data, t.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), t.hooks.run("after-highlight", u), t.hooks.run("complete", u);
	        }, c.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
	      } else u.highlightedCode = t.highlight(u.code, u.grammar, u.language), t.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(n), t.hooks.run("after-highlight", u), t.hooks.run("complete", u);
	    }, highlight: function highlight(e, a, r) {
	      var l = t.tokenize(e, a);return n.stringify(t.util.encode(l), r);
	    }, tokenize: function tokenize(e, n) {
	      var a = t.Token,
	          r = [e],
	          l = n.rest;if (l) {
	        for (var i in l) {
	          n[i] = l[i];
	        }delete n.rest;
	      }e: for (var i in n) {
	        if (n.hasOwnProperty(i) && n[i]) {
	          var o = n[i];o = "Array" === t.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
	            var u = o[s],
	                c = u.inside,
	                g = !!u.lookbehind,
	                f = 0,
	                h = u.alias;u = u.pattern || u;for (var p = 0; p < r.length; p++) {
	              var d = r[p];if (r.length > e.length) break e;if (!(d instanceof a)) {
	                u.lastIndex = 0;var m = u.exec(d);if (m) {
	                  g && (f = m[1].length);var y = m.index - 1 + f,
	                      m = m[0].slice(f),
	                      v = m.length,
	                      k = y + v,
	                      b = d.slice(0, y + 1),
	                      w = d.slice(k + 1),
	                      P = [p, 1];b && P.push(b);var A = new a(i, c ? t.tokenize(m, c) : m, h);P.push(A), w && P.push(w), Array.prototype.splice.apply(r, P);
	                }
	              }
	            }
	          }
	        }
	      }return r;
	    }, hooks: { all: {}, add: function add(e, n) {
	        var a = t.hooks.all;a[e] = a[e] || [], a[e].push(n);
	      }, run: function run(e, n) {
	        var a = t.hooks.all[e];if (a && a.length) for (var r, l = 0; r = a[l++];) {
	          r(n);
	        }
	      } } },
	      n = t.Token = function (e, t, n) {
	    this.type = e, this.content = t, this.alias = n;
	  };if (n.stringify = function (e, a, r) {
	    if ("string" == typeof e) return e;if ("Array" === t.util.type(e)) return e.map(function (t) {
	      return n.stringify(t, a, e);
	    }).join("");var l = { type: e.type, content: n.stringify(e.content, a, r), tag: "span", classes: ["token", e.type], attributes: {}, language: a, parent: r };if ("comment" == l.type && (l.attributes.spellcheck = "true"), e.alias) {
	      var i = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
	    }t.hooks.run("wrap", l);var o = "";for (var s in l.attributes) {
	      o += (o ? " " : "") + s + '="' + (l.attributes[s] || "") + '"';
	    }return "<" + l.tag + ' class="' + l.classes.join(" ") + '" ' + o + ">" + l.content + "</" + l.tag + ">";
	  }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
	    var n = JSON.parse(e.data),
	        a = n.language,
	        r = n.code,
	        l = n.immediateClose;_self.postMessage(t.highlight(r, t.languages[a], a)), l && _self.close();
	  }, !1), _self.Prism) : _self.Prism;var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return a && (t.filename = a.src, document.addEventListener && !a.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), _self.Prism;
	}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
	Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
	  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
	}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
	Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
	Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
	Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0 } }), Prism.languages.insertBefore("javascript", "class-name", { "template-string": { pattern: /`(?:\\`|\\?[^`])*`/, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.postFunc = postFunc;
	function postFunc(codeLanguage, code) {
	    var codeWrapper = document.querySelector('#codeWrapper');
	    codeWrapper.innerHTML = "<pre><code class=\"language-" + codeLanguage + "\">\n                                  " + code + "\n                            </code></pre>";

	    console.log(codeLanguage);
	    console.log(code);
	    post(codeLanguage);
	};

	function post(language) {
	    var http = new XMLHttpRequest();
	    http.open("POST", "http://88.131.100.231:81", true);
	    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    console.log(language);
	    http.send(language);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultTheme = defaultTheme;
	function defaultTheme() {
	  var appContainer = document.querySelector('#appContainer');
	  var topSection = document.querySelector('#top-section');
	  var codeWrap = document.querySelector('#codeWrap');
	  var textarea = document.querySelector('#code');
	  var icon = document.querySelectorAll('.icon');
	  var post = document.querySelector('.post');
	  var language = document.querySelector('.language');
	  var right = document.querySelector('.right');
	  var codeeditor = document.querySelector('#codeeditor');

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
	    if (typeof icon[i] === 'undefined') {
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

/***/ }
/******/ ]);