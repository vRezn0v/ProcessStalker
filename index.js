const { checkStatus, getPID } = require('./commands/core');

getPID('firefox', a => {
    checkStatus(a);
});