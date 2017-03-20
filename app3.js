var prompt = require('prompt');

prompt.start();
console.log("quel age as-tu ?")
prompt.get(['age'], function (err, result) {
  console.log("j'ai " + result.age + " ans");
});
