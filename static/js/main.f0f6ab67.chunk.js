(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{21:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i}));var r=e(8),c=function(){return{type:r.a}},o=function(t,n){return{coords:n,type:r.b,value:t}},i=function(t){return{coords:t,type:r.c}}},22:function(t,n){},28:function(t,n,e){"use strict";var r=e(7),c=e(9);var o=function(t){for(var n=0;n<9;n++)for(var e=0;e<9;e++)if(0===t[n][e])return!1;return!0};var i=function t(n,e){if(!Array.isArray(n)&&!Array.isArray(e))return n===e;if(n.length!==e.length)return!1;for(var r=0,c=n.length;r<c;r++)if(!t(n[r],e[r]))return!1;return!0};var l=function(t){for(var n=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],e=0;e<9;e++)for(var r=0;r<9;r++)n[e][r]=t[e][r];return n};var a=function(){var t=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return f(t),t},u=e(16),d=[1,2,3,4,5,6,7,8,9];var f=function t(n){for(var e=0,r=0,c=0;c<81;c++)if(r=c%9,0===n[e=Math.floor(c/9)][r]){k(d);var i,l=Object(u.a)(d);try{for(l.s();!(i=l.n()).done;){var a=i.value;if(!v({grid:n,row:e,value:a})&&!b({col:r,grid:n,value:a})){var f=x({col:r,grid:n,row:e});if(!h({square:f,value:a})){if(n[e][r]=a,o(n))return!0;if(t(n))return!0}}}}catch(s){l.e(s)}finally{l.f()}break}n[e][r]=0};var s=function(){return Math.floor(Math.random()*Math.floor(9))};var b=function(t){for(var n=t.col,e=t.grid,r=t.value,c=0;c<9;c++)if(r===e[c][n])return!0;return!1};var v=function(t){var n=t.grid,e=t.row,r=t.value;return n[e].includes(r)};var h=function(t){var n=t.square,e=t.value;return[].concat(Object(r.a)(n[0]),Object(r.a)(n[1]),Object(r.a)(n[2])).includes(e)},j={counter:0};var O=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;n>0;){for(var e=s(),r=s();0===t[e][r];)e=s(),r=s();var c=t[e][r];t[e][r]=0;var o=l(t);j.counter=0,p(o),1!==j.counter&&(t[e][r]=c,n--)}return t};var k=function(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}},g=[1,2,3,4,5,6,7,8,9];var p=function t(n){for(var e=0,r=0,c=0;c<81;c++)if(r=c%9,0===n[e=Math.floor(c/9)][r]){var i,l=Object(u.a)(g);try{for(l.s();!(i=l.n()).done;){var a=i.value;if(!v({grid:n,row:e,value:a})&&!b({col:r,grid:n,value:a})){var d=x({col:r,grid:n,row:e});if(!h({square:d,value:a})){if(n[e][r]=a,o(n)){j.counter++;break}if(t(n))return!0}}}}catch(f){l.e(f)}finally{l.f()}break}n[e][r]=0};var x=function(t){var n=t.col,e=t.grid,r=t.row,c=[];if(r<3)if(n<3)for(var o=0;o<3;o++)c.push([e[o][0],e[o][1],e[o][2]]);else if(n<6)for(var i=0;i<3;i++)c.push([e[i][3],e[i][4],e[i][5]]);else for(var l=0;l<3;l++)c.push([e[l][6],e[l][7],e[l][8]]);else if(r<6)if(n<3)for(var a=3;a<6;a++)c.push([e[a][0],e[a][1],e[a][2]]);else if(n<6)for(var u=3;u<6;u++)c.push([e[u][3],e[u][4],e[u][5]]);else for(var d=3;d<6;d++)c.push([e[d][6],e[d][7],e[d][8]]);else if(n<3)for(var f=6;f<9;f++)c.push([e[f][0],e[f][1],e[f][2]]);else if(n<6)for(var s=6;s<9;s++)c.push([e[s][3],e[s][4],e[s][5]]);else for(var b=6;b<9;b++)c.push([e[b][6],e[b][7],e[b][8]]);return c},B=e(8),w={};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B.a:var e=a(),o=l(e),u=O(o),d=l(u);return Object(c.a)(Object(c.a)({},t),{},{challengeGrid:u,solvedGrid:e,workingGrid:d});case B.b:return t.workingGrid&&t.solvedGrid?t.solvedGrid[n.coords[0]][n.coords[1]]!==n.value?(alert("Incorrect option!"),t):(t.workingGrid[n.coords[0]][n.coords[1]]=n.value,i(t.workingGrid,t.solvedGrid)&&alert("Yes, you did it!"),Object(c.a)(Object(c.a)({},t),{},{workingGrid:Object(r.a)(t.workingGrid)})):t;case B.c:return Object(c.a)(Object(c.a)({},t),{},{selectedBlock:n.coords});default:return t}}},41:function(t,n,e){"use strict";e.r(n);var r=e(3),c=e(0),o=e(14),i=e.n(o),l=e(6),a=e(1),u=e(5),d=function(t){var n=t.value,e=Object(l.c)((function(t){var n=t.selectedBlock,e=t.workingGrid;return{selectedBlock:n,selectedValue:e&&n?e[n[0]][n[1]]:0}})),o=Object(l.b)(),i=Object(c.useCallback)((function(){e.selectedBlock&&0===e.selectedValue&&o(Object(u.fillBlock)(n,e.selectedBlock))}),[o,e.selectedBlock,e.selectedValue,n]);return Object(r.jsx)(z,{onClick:i,children:n})},f=e(2);function s(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-flow: row;\n"]);return s=function(){return t},t}var b=a.d.div(s()),v=function(){return Object(r.jsx)(b,{children:[1,2,3,4,5,6,7,8,9].map((function(t){return Object(r.jsx)(d,{value:t},t)}))})},h=e(7),j=e(4);function O(){var t=Object(f.a)(["\n\t\talign-items: center;\n\t\tbackground-color: ",";\n\t\tborder: solid 1px ",";\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-shrink: 0;\n\t\tflex-basis: 0;\n\t\tfont-size: 20px;\n\t\tfont-weight: ",";\n\t\theight: auto;\n\t\tjustify-content: center;\n\t\ttransition: ",";\n\t\tuser-select: none;\n\n\t\t&:before {\n\t\t\tpadding-top: 100%;\n\t\t\tcontent: '';\n\t\t\tfloat: left;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t}\n\t"]);return O=function(){return t},t}function k(){var t=Object(f.a)(["\n\t","\n"]);return k=function(){return t},t}var g=a.d.div(k(),(function(t){var n=t.active,e=t.puzzle,r=t.theme;return Object(a.c)(O(),n?r.colors.blue:r.colors.white,r.colors.black,e?"normal":"bold",r.transition,r.colors.lightBlue)})),p=function(t){var n=t.colIndex,e=t.rowIndex,c=Object(l.c)((function(t){var r=t.challengeGrid,c=t.selectedBlock,o=t.workingGrid;return{isActive:!!c&&(c[0]===e&&c[1]===n),isPuzzle:!(!r||0===r[e][n]),value:o?o[e][n]:0}})),o=Object(l.b)();return Object(r.jsx)(g,{active:c.isActive,"data-cy":"block-".concat(e,"-").concat(n),onClick:function(){c.isActive||o(Object(u.selectBlock)([e,n]))},puzzle:c.isPuzzle,children:0===c.value?"":c.value})};function x(){var t=Object(f.a)(["\n\t\tdisplay: flex;\n\t\tflex-flow: row;\n\n\t\t&:nth-child(1) {\n\t\t\tdiv {\n\t\t\t\tborder-top: solid 4px ",";\n\t\t\t}\n\t\t}\n\n\t\t&:nth-child(3),\n\t\t&:nth-child(6) {\n\t\t\tdiv {\n\t\t\t\tborder-bottom: solid 3px ",";\n\t\t\t}\n\t\t}\n\n\t\t&:nth-child(9) {\n\t\t\tborder-bottom: solid 4px ",";\n\t\t}\n\n\t\tdiv {\n\t\t\t&:nth-child(1) {\n\t\t\t\tborder-left: solid 4px ",";\n\t\t\t}\n\t\t\t&:nth-child(3),\n\t\t\t&:nth-child(6),\n\t\t\t&:nth-child(9) {\n\t\t\t\tborder-right: solid 4px ",";\n\t\t\t}\n\t\t\t&:nth-child(4),\n\t\t\t&:nth-child(7) {\n\t\t\t\tborder-left: none;\n\t\t\t}\n\t\t}\n\t"]);return x=function(){return t},t}function B(){var t=Object(f.a)(["\n\t","\n"]);return B=function(){return t},t}function w(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 10px 0;\n"]);return w=function(){return t},t}var y=a.d.div(w()),m=a.d.div(B(),(function(t){var n=t.theme;return Object(a.c)(x(),n.colors.black,n.colors.black,n.colors.black,n.colors.black,n.colors.black)})),G=function(){var t=Object(l.c)((function(t){var n=t.selectedBlock,e=t.workingGrid;return{selectedBlock:n,selectedValue:e&&n?e[n[0]][n[1]]:0}})),n=Object(l.b)(),e=Object(c.useCallback)((function(){return n(Object(u.createGrid)())}),[n]),o=Object(c.useCallback)((function(e){t.selectedBlock&&0===t.selectedValue&&n(Object(u.fillBlock)(e,t.selectedBlock))}),[n,t.selectedBlock,t.selectedValue]);return Object(j.a)("1",(function(){return o(1)})),Object(j.a)("2",(function(){return o(2)})),Object(j.a)("3",(function(){return o(3)})),Object(j.a)("4",(function(){return o(4)})),Object(j.a)("5",(function(){return o(5)})),Object(j.a)("6",(function(){return o(6)})),Object(j.a)("7",(function(){return o(7)})),Object(j.a)("8",(function(){return o(8)})),Object(j.a)("9",(function(){return o(9)})),Object(j.a)("down",(function(){t.selectedBlock&&t.selectedBlock[0]<8&&n(Object(u.selectBlock)([t.selectedBlock[0]+1,t.selectedBlock[1]]))})),Object(j.a)("left",(function(){t.selectedBlock&&t.selectedBlock[1]>0&&n(Object(u.selectBlock)([t.selectedBlock[0],t.selectedBlock[1]-1]))})),Object(j.a)("right",(function(){t.selectedBlock&&t.selectedBlock[1]<8&&n(Object(u.selectBlock)([t.selectedBlock[0],t.selectedBlock[1]+1]))})),Object(j.a)("up",(function(){t.selectedBlock&&t.selectedBlock[0]>0&&n(Object(u.selectBlock)([t.selectedBlock[0]-1,t.selectedBlock[1]]))})),Object(c.useEffect)((function(){e()}),[e]),Object(r.jsx)(y,{children:c.Children.toArray(Object(h.a)(Array(9)).map((function(t,n){return Object(r.jsx)(m,{children:c.Children.toArray(Object(h.a)(Array(9)).map((function(t,e){return Object(r.jsx)(p,{colIndex:e,rowIndex:n})})))})})))})};function A(){var t=Object(f.a)(["\n\t\talign-items: center;\n\t\tbackground-color: ",";\n\t\tborder: 2px solid ",";\n\t\tborder-radius: 4px;\n\t\tcolors: ",";\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex: 1;\n\t\tfont-size: 16px;\n\t\tfont-weight: bold;\n\t\theight: 40px;\n\t\tjustify-content: center;\n\t\tmargin: 4px 2px;\n\t\tmin-height: 40px;\n\t\topacity: 0.9;\n\t\ttransition: ",";\n\n\t\t&:focus {\n\t\t\tborder-color: ",";\n\t\t\toutline: none;\n\t\t}\n\n\t\t&:hover {\n\t\t\topacity: 0.6;\n\t\t}\n\t"]);return A=function(){return t},t}function C(){var t=Object(f.a)(["\n\t","\n"]);return C=function(){return t},t}var z=a.d.button(C(),(function(t){var n=t.theme;return Object(a.c)(A(),n.colors.black,n.colors.black,n.colors.white,n.transition,n.colors.blue)}));function I(){var t=Object(f.a)(["\n\t\tbackground-color: ",";\n\t\tborder-radius: 20px;\n\t\tdisplay: flex;\n\t\tflex: 1;\n\t\tflex-direction: column;\n\t\theight: max-content;\n\t\tpadding: 15px;\n\t"]);return I=function(){return t},t}function E(){var t=Object(f.a)(["\n\t","\n"]);return E=function(){return t},t}var M=a.d.div(E(),(function(t){var n=t.theme;return Object(a.c)(I(),n.colors.white)}));function V(){var t=Object(f.a)(["\n\tmax-width: 500px;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tjustify-content: center;\n"]);return V=function(){return t},t}var L=a.d.div(V());function q(){var t=Object(f.a)(["\n\t\tcolor: ",";\n\t\tmargin-top: 0;\n\t\ttext-align: center;\n\t"]);return q=function(){return t},t}function S(){var t=Object(f.a)(["\n\t","\n"]);return S=function(){return t},t}var T=a.d.h1(S(),(function(t){var n=t.theme;return Object(a.c)(q(),n.colors.white)})),_=e(12),J=e(27);var K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(_.createStore)(u.default,t,Object(J.devToolsEnhancer)({}));return n};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(){var t=Object(f.a)(["\n    html {\n      height: 100%;\n\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0;\n\n        #root {\n          background: ",";\n          color: ",";\n          display: flex;\n          font-family: sans-serif;\n          height: 100%;\n          justify-content: center;\n          padding: 15px;\n        }\n      }\n    }\n  "]);return P=function(){return t},t}function R(){var t=Object(f.a)(["\n  ","\n"]);return R=function(){return t},t}var W=Object(a.b)(R(),(function(t){var n=t.theme;return Object(a.c)(P(),n.colors.background,n.colors.black)})),D=K();i.a.render(Object(r.jsxs)(a.a,{theme:{colors:{background:"radial-gradient(#282c34cc, #282c34)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"white"},transition:"0.3s"},children:[Object(r.jsx)(W,{}),Object(r.jsx)(l.a,{store:D,children:Object(r.jsxs)(L,{children:[Object(r.jsx)(T,{children:"Sudoku"})," ",Object(r.jsxs)(M,{children:[Object(r.jsx)(G,{}),Object(r.jsx)(v,{})]})]})})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},5:function(t,n,e){"use strict";var r=e(28),c=e(21);e.d(n,"createGrid",(function(){return c.a})),e.d(n,"fillBlock",(function(){return c.b})),e.d(n,"selectBlock",(function(){return c.c}));e(22);n.default=r.a},8:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o}));var r="CREATE_GRID",c="FILL_BLOCK",o="SELECT_BLOCK"}},[[41,1,2]]]);
//# sourceMappingURL=main.f0f6ab67.chunk.js.map