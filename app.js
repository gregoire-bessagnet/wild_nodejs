process.stdin.resume()
process.stdin.setEncoding('utf8')
// console.log('What\'s your name ? ')

 // process.stdin.on('data', (text) => {
 //    console.log('Hello ' + text)
 //     process.exit()
 //    })

var age = console.log("How old are you ?");

process.stdin.on('data', (agedonne) => {
    if (agedonne > 99) {
        console.log("You seems to be dead, perhaps...") 
    }
    else if (isNaN(agedonne)) {
        console.log("lol")
    }
    else {
    var today = new Date().getFullYear();
    var anneedenaissance = today - agedonne;
    console.log('Vous êtes né en ' + anneedenaissance) };
    process.exit()
})



    
    
