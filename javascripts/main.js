/*jshint esversion: 6 */

const $ = require('jquery');
const factory = require('./factory');
const format = require('./formatter');
const fuckFactory = require('./fuckFactory');

let startDate = "";
let endDate = "";
let count = 0;

$('#startDate, #endDate').change(() => {
    startDate = $('#startDate').val();
    endDate = $('#endDate').val();
});

$('#submit').on("click", () => {
    let count = 0;
    $('#fuck-off').html('');
    factory.getSpaceData(startDate, endDate)
    .then((data) => {
        return format.formatData(data);
    })
    .then( (dangerData) => {
        dangerData.forEach((name) => {
            count += 1;
            if (count <= 3) {
            let randomNumber = Math.floor(Math.random()*(7-0+1)+0);
            fuckFactory.fuckOffAsteroid(name, randomNumber);
        }});
    })
    .catch((err)=> {
        alert("Maximum one week span allowed!");
    });
});

