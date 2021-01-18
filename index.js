const { checkStatus, getPID } = require('./commands/core');
const { fetchProcesses } = require('./commands/fetch');
const { murder } = require('./commands/kill');


/*getPID('firefox', a => {
    checkStatus(a);
});*/

//murder('firefox');

let a = fetchProcesses(function (err, out) {
    console.log('output is', out);
});

console.log(a);