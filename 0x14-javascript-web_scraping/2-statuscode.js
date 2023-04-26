#!/usr/bin/node
// A script that displays the status code of a GET request

const req = require('request');
const url = process.argv[2];

req.get(url, function (err, response, body) {
  if (err === null) {
    console.log('code:', response.statusCode);
  }
});
