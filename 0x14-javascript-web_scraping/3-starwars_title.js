#!/usr/bin/node
// a script that prints the title of a Star Wars movie where the episode number matches a given integer.

const req = require('request');
const episode = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';
const starWarsApi = url + episode;

req(starWarsApi, function (err, response, body) {
  if (err === null) {
    const swObject = JSON.parse(body);
    const swTitle = swObject.title;
    console.log(swTitle);
  }
});
