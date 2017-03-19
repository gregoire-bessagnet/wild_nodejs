const fs = require('fs');

// fs.readFile('index.txt', function (err, data){
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data.toString());
// });

const data = fs.readFileSync('index.txt');
console.log(typeof(data));
console.log(data.toString());

console.log("we are finished !");
