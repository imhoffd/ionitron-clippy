/*! Built with http://stenciljs.com */

matt.loadStyles("ionitron-clippy",".container[data-ionitron-clippy] {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  color: #444;\n}\n\n.container[data-ionitron-clippy]   .ionitron[data-ionitron-clippy] {\n  height: 150px;\n  -webkit-animation-name: Floatingx;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n}\n\n@-webkit-keyframes Floatingx {\n  from {\n    -webkit-transform: translate(0, 0px);\n  }\n  65% {\n    -webkit-transform: translate(0, 15px);\n  }\n  to {\n    -webkit-transform: translate(0, 0px);\n  }\n}\n\n\n.talk-bubble[data-ionitron-clippy] {\n  margin: 40px;\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: auto;\n  background-color: lightyellow;\n  border: 2px solid #444;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n}\n\n.talk-bubble[data-ionitron-clippy]:after, .talk-bubble[data-ionitron-clippy]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: auto;\n  left: auto;\n}\n\n.talk-bubble[data-ionitron-clippy]:after {\n  right: -20px;\n  bottom: 38px;\n  border: 12px solid;\n  border-color: lightyellow transparent transparent lightyellow;\n}\n\n.talk-bubble[data-ionitron-clippy]:before {\n  right: -25px;\n  bottom: 40px;\n  border: 12px solid;\n  border-color: #444 transparent transparent #444;\n}\n\n.talk-text[data-ionitron-clippy] {\n  padding: 10px 13px;\n  text-align: left;\n  line-height: 1.5em;\n}\n\n.talk-text[data-ionitron-clippy]   p[data-ionitron-clippy] {\n  \n  -webkit-margin-before: 0em;\n  -webkit-margin-after: 0em;\n}\nionitron-clippy.hydrated{visibility:inherit}");
matt.loadComponents(

/**** module id (dev mode) ****/
"ionitron-clippy",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
"use strict";
// @stencil/core

var MyName = /** @class */ (function () {
    function MyName() {
    }
    MyName.prototype.render = function () {
        return (h("div", { class: "container" },
            h("div", { class: "talk-bubble" },
                h("div", { class: "talk-text" },
                    h("p", null, "Hi, I'm Ionitron. I'm the Ionic assistent and my job is to help you create great apps! Do you need assistance?"))),
            h("img", { src: "./assets/ionitron.png", class: "ionitron" })));
    };
    return MyName;
}());

exports['ionitron-clippy'] = MyName;
},


/***************** ionitron-clippy *****************/
[
/** ionitron-clippy: tag **/
"ionitron-clippy",

/** ionitron-clippy: members **/
[
  [ "message", /** prop **/ 1, /** type string **/ 1 ]
],

/** ionitron-clippy: host **/
{}

]
);