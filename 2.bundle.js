(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(t,n,e){"use strict";e.r(n);var r=e(2),i=e(3),o=e(6),a=e(7),u=e(4),c=e.n(u),f=e(9),s=e.n(f);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,n,e){return n&&d(t.prototype,n),e&&d(t,e),t}function v(t,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,n){return(w=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var y=window.innerWidth/2*(window.innerHeight/2),b=document.getElementById("game-of-life-canvas"),g=function(t,n){return Math.sqrt(Math.pow(t.clientX-n.clientX,2)+Math.pow(t.clientY-n.clientY,2),2)},k=function(t){var n=function(t){return Math.sqrt(Math.pow(t.clientX,2)+Math.pow(t.clientY,2),2)}(t);return{clientX:t.clientX/n,clientY:t.clientY/n}},x=function(t,n){return{clientX:t.clientX*n,clientY:t.clientY*n}},E=function(t,n){return{clientX:t.clientX+n.clientX,clientY:t.clientY+n.clientY}},M=function(t,n){return{clientX:t.clientX-n.clientX,clientY:t.clientY-n.clientY}},S=!1,_=null;b.addEventListener("mousedown",function(t){t.preventDefault(),S=!0,X(t),_=t}),b.addEventListener("mouseup",function(t){t.preventDefault(),_=null,S=!1}),b.addEventListener("mousemove",function(t){t.preventDefault();var n={clientX:t.clientX,clientY:t.clientY};if(S){var e=C[window.UI.state.size],r=0;for(X(n);g(n,_)>e;){var i=g(n,_);if(n=E(n,x(k(M(_,t)),Math.min(e,i))),++r>1e3)break;X(n)}_=t}}),b.addEventListener("touchstart",function(t){S=!0,Y(t)}),b.addEventListener("touchend",function(t){_=null,S=!1}),b.addEventListener("touchmove",function(t){Y(t)});var Y=function(t){t.preventDefault(),Array.from(t.touches).forEach(X)},X=function(t){if(S){var n=b.getBoundingClientRect(),e=b.width/n.width,r=b.height/n.height,i=(t.clientX-n.left)*e,o=(t.clientY-n.top)*r,a=Math.min(Math.floor(i),D-1),u=Math.min(Math.floor(o),L-1);F.paint(a,u,C[window.UI.state.size],window.UI.state.selectedElement)}},C=[1,3,5,8,13,21,34,55,89],O=function(t){function n(t){var e;return h(this,n),(e=v(this,m(n).call(this,t))).state={paused:!1,size:4,selectedElement:r.a.Water},e}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&w(t,n)}(n,c.a.Component),p(n,[{key:"playPause",value:function(){this.state.paused?T():(cancelAnimationFrame(window.animationId),window.animationId=null),this.setState({paused:!this.state.paused})}},{key:"bumpSize",value:function(t,n){t.preventDefault(),this.setState({size:(this.state.size+n+C.length)%C.length})}},{key:"render",value:function(){var t=this,n=this.state,e=n.size,i=n.paused,o=n.selectedElement;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return t.playPause()}},i?"▶︎":"⏸︎"),i&&c.a.createElement("button",{onClick:function(){return F.tick()}},"tick"),c.a.createElement("button",{style:{minWidth:"80px"},onClick:function(n){return t.bumpSize(n,1)},onContextMenu:function(n){return t.bumpSize(n,-1)}},"Size:",C[e]),Object.keys(r.a).map(function(n){return function(t,n,e){var i=r.a[t];return c.a.createElement("button",{className:i==n?"selected":"",key:t,onClick:function(){e(i)}},"  ",t,"  ")}(n,o,function(n){return t.setState({selectedElement:n})})}))}}]),n}();s.a.render(c.a.createElement(O,{ref:function(t){window.UI=t}}),document.getElementById("ui"));var z=new(function(){function t(){h(this,t),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}return p(t,[{key:"render",value:function(){var t=performance.now(),n=t-this.lastFrameTimeStamp;this.lastFrameTimeStamp=t;var e=1/n*1e3;this.frames.push(e),this.frames.length>30&&this.frames.shift();for(var r=1/0,i=-1/0,o=0,a=0;a<this.frames.length;a++)o+=this.frames[a],r=Math.min(this.frames[a],r),i=Math.max(this.frames[a],i);var u=o/this.frames.length;this.fps.textContent="\n ".concat((y/1e3).toFixed(0),"Kpx\n FPS:").concat(Math.round(u),"\n    ").trim()}}]),t}());e.d(n,"renderLoop",function(){return T}),e.d(n,"canvas",function(){return B}),e.d(n,"width",function(){return D}),e.d(n,"height",function(){return L}),e.d(n,"universe",function(){return F}),e.d(n,"ratio",function(){return j});var j=2,I=window.innerWidth/j,P=window.innerHeight/j,F=r.b.new(I,P),D=F.width(),L=F.height(),B=document.getElementById("game-of-life-canvas");B.height=L,B.width=D;var T=function t(){z.render(),F.tick(),window.animationId=requestAnimationFrame(t)};!function(t){var n=t.canvas,e=t.universe,r=o({canvas:n}),u=r.texture(),c=e.cells(),f=e.width(),s=e.height(),l=new Uint8Array(i.c.buffer,c,f*s*4),h=r.texture({width:f,height:s,data:l}),d=r({frag:a,uniforms:{t:function(t){return t.tick},data:function(){return h({width:f,height:s,data:l})},resolution:function(t){return[t.viewportWidth,t.viewportHeight]},backBuffer:u},vert:'\n  // boring "pass-through" vertex shader\n  precision mediump float;\n  attribute vec2 position;\n  varying vec2 uv;\n  void main () {\n    uv = position;\n    gl_Position = vec4(position, 0, 1);\n  }',attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3});r.frame(function(t){r.clear({color:[0,0,0,1]}),d(),u({copy:!0})})}({canvas:B,universe:F}),T()},function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"c",function(){return f}),e.d(n,"b",function(){return s}),e.d(n,"d",function(){return p});var r=e(3);function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}var u=Object.freeze({Empty:0,Wall:1,Powder:2,Water:3,Gas:4,Clone:5,Fire:6}),c=Math.random.bind(Math)||function(){throw new Error("wasm-bindgen: Math.random.bind(Math) does not exist")};function f(){return c()}var s=function(){function t(){i(this,t)}return a(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,function(t){r.b(t)}(t)}},{key:"tick",value:function(){return r.h(this.ptr)}},{key:"width",value:function(){return r.i(this.ptr)}},{key:"height",value:function(){return r.e(this.ptr)}},{key:"cells",value:function(){return r.d(this.ptr)}},{key:"paint",value:function(t,n,e,i){return r.g(this.ptr,t,n,e,i)}}],[{key:"__wrap",value:function(n){var e=Object.create(t.prototype);return e.ptr=n,e}},{key:"new",value:function(n,e){return t.__wrap(r.f(n,e))}}]),t}(),l=new TextDecoder("utf-8"),h=null;function d(t,n){return l.decode((null!==h&&h.buffer===r.c.buffer||(h=new Uint8Array(r.c.buffer)),h).subarray(t,t+n))}function p(t,n){throw new Error(d(t,n))}},function(t,n,e){"use strict";var r=e.w[t.i];t.exports=r;e(2);r.j()},,,,function(t,n){t.exports="precision mediump float;\n#define GLSLIFY 1\nuniform float t;\nuniform vec2 resolution;\nuniform sampler2D backBuffer;\nuniform sampler2D data;\n\nvarying vec2 uv;\n\n// clang-format off\nvec3 hsv2rgb_1_0(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\n// clang-format on\n\nvoid main() {\n  vec3 color;\n  //   float r = abs(sin(t / 25.));\n  //   if (length(uv) < r && length(uv) > r - 0.1) {\n  // color = hsv2rgb(vec3(sin(t * 0.01), 0.5, 0.5));\n\n  vec2 textCoord = (uv * vec2(0.5, -0.5)) + vec2(0.5);\n  vec4 data = texture2D(data, textCoord);\n  float type = data.r * 255.;\n  float hue = 0.0;\n  float saturation = 0.6;\n  float lightness = 0.3 + data.g * 0.5;\n\n  if (type == 0.) {\n    hue = 0.1;\n    lightness = 0.0;\n  } else if (type == 1.) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.4;\n\n  } else if (type == 2.) {\n    hue = 0.1;\n  } else if (type == 3.) {\n    hue = 0.6;\n  } else if (type == 4.) {\n    hue = 0.5;\n    saturation = 0.5;\n  } else if (type == 5.) {\n    hue = 0.05;\n  } else if (type == 6.) {\n    hue = (data.g * 0.1);\n    lightness = 0.5 + data.g * 0.5;\n  }\n  color = hsv2rgb_1_0(vec3(hue, saturation, lightness));\n\n  gl_FragColor = vec4(color, 1.0);\n}"}]]);