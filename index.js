const { checkStatus, getPID } = require('./helpers');

getPID('firefox', a => {
    checkStatus(a);
})