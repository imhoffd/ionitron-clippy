/*! Built with http://stenciljs.com */
matt.loadComponents(

/**** module id (dev mode) ****/
"ionitron-clippy",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
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

exports['IONITRON-CLIPPY'] = MyName;
},


/***************** ionitron-clippy *****************/
[
/** ionitron-clippy: tag **/
"IONITRON-CLIPPY",

/** ionitron-clippy: members **/
[
  [ "message", /** prop **/ 1, /** type string **/ 1 ]
],

/** ionitron-clippy: host **/
{}

]
)