process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('What\'s your name ? ')

process.stdin.on('data', (text) => {
    console.log('Hello ' + text)
    process.exit()
})

process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('How old are you ?')

process.stdin.on('data', (text) => {
  var today = new Date().getFullYear();
  var anneedenaissance = today - text;
  console.log('Vous êtes né en ' + anneedenaissance)
  process.exit()
})



