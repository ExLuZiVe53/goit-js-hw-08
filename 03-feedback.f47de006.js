function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var i,r,o,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,o=r;return i=r=void 0,c=e,f=t.apply(o,n)}function E(t){return c=t,a=setTimeout(h,e),l?b(t):f}function O(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=o}function h(){var t=p();if(O(t))return j(t);a=setTimeout(h,function(t){var n=e-(t-u);return s?v(n,o-(t-c)):n}(t))}function j(t){return a=void 0,g&&i?b(t):(i=r=void 0,f)}function w(){var t=p(),n=O(t);if(i=arguments,r=this,u=t,n){if(void 0===a)return E(u);if(s)return a=setTimeout(h,e),b(u)}return void 0===a&&(a=setTimeout(h,e)),f}return e=y(e)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=r=a=void 0},w.flush=function(){return void 0===a?f:j(p())},w}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:i,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t(e)((function(t){E[t.target.name]=t.target.value.trim(),localStorage.setItem("FEEDBACK_FORM_STALE",JSON.stringify(E))}),500)),b.addEventListener("submit",(function(t){t.preventDefault(),E={},b.reset(),localStorage.removeItem("FEEDBACK_FORM_STALE")}));let E={};window.addEventListener("load",(()=>{try{const t=localStorage.getItem("feedback-form-state");if(!t)return;E=JSON.parse(t),Object.entries(E).forEach((([t,e])=>{b.elements[t].value=e}))}catch(t){console.log(t.message)}}));
//# sourceMappingURL=03-feedback.f47de006.js.map
