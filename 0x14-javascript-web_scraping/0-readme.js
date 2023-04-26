#!/usr/bin/node
// A script that reads and prints the content of a file in utf-8 taking the file path as argment

const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
