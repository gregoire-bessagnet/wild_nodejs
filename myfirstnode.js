var fs = require('fs'); // via la core library de Node
var foo = require('someRandomNpmScript'); // via ce que l'on peut récupérer d'NPM //
// nécessite de télécharger les packets comme sur Ruby
var app = require('./app.js'); // ou via un fichier en local.

console.log(fs);
