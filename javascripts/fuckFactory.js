/*jshint esversion: 6 */

const $ = require('jquery');
const print = require('./DOMOutputter');

let fuckPathList = ["look", "off", "outside", "yoda", "you", "thinking", "think", "bus"];

module.exports.fuckOffAsteroid = (name, randomNumber) => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: `http://www.foaas.com/${fuckPathList[randomNumber]}/${name}/Earth`
        }).done( (data) => {
             print.printToDom($(data).find('.hero-unit').text());
        }).fail( (err) => {
            console.log("ERROR", err);
            reject(err);
        });
    });
};


    
