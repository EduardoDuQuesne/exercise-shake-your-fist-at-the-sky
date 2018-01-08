/*jshint esversion: 6 */

const $ = require('jquery');
const apiKey = require('./apikey');

module.exports.getSpaceData = (startDate, endDate) => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
        }).done( (data) => {
            resolve(data.near_earth_objects);
        }).fail( (err) => {
            reject(err);
        });
    });
};