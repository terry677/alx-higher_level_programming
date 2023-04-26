#!/usr/bin/node
// A script that write into a string into a file

const fs = require('fs');
const path = process.argv[2];
const content = process.argv[3];

fs.writeFile(path, content, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});
