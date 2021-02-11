const repl = require('repl');

const server = repl.start('@everyday > ')

server.defineCommand('insert', {
    help: 'Insert something lol',
    action(_) {
        this.clearBufferedCommand();
        console.log('This is where we do an insert.');
        this.displayPrompt();
    }
})

server.defineCommand('select', {
    help: 'select something lol',
    action(_) {
        this.clearBufferedCommand();
        console.log('This is where we would do a select.');
        this.displayPrompt();
    }
})