const request = require('request');
const fs = require('fs');

// Create variable for fileSize which counts how many characters the body contains.
let fileSize = 0;


//Create variables to handle command line arguments
const URLpath = process.argv[2];
const filePath = process.argv[3];

// Implement fetcher function
const fetcher = () => {

  fs.writeFile(filePath, URLpath, error => {
    if (error) {
      console.log(error);
    }
      
  });
  request(URLpath, (error, response, body) => {
    for (const char of body) {
      fileSize += 1;
    }
    console.log(`Downloaded and saved ${ fileSize } bytes to ${ filePath }`);
    
  });

  
};





fetcher();