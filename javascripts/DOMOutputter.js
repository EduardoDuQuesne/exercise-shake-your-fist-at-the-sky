/*jshint esversion: 6 */

const $ = require('jquery');


module.exports.printToDom = (fuckOff) => {
    $('#fuck-off').append(`<h3 class='messages'>${fuckOff}</h3>`);
};