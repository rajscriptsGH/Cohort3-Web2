const fs = require('fs')
const { Command } = require('commander');
const { count } = require('console');
const program = new Command();

program
    .name('counter')
    .description('CLI to count no of letter')
    .version('0.8.0')

program.command('count')
    .description('Count no of line')
    .argument('<file>', "file to count")
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const lines = data.split('\n').length
                const letter = data.split('').length
                console.log(`No of lines: ${lines} in ${file}`);
                console.log(`No of char: ${letter}`);
            }
        })
    })

program.parse()
