"use strict";
function callback(fun) {
    setTimeout(fun, 1000);
}
callback(function () {
    console.log("hello");
});
