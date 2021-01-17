var exec = require('child_process').exec;

module.exports = {
    fetchProcesses: () => {
        const pslist = [];
        const command = 'ps xo pid,comm,state';
        exec(command, function(err, stdout, stderr) {
            if (err) {
                console.log('Error:' + ' ' + stderr);
            } else {
                var data = stdout;
                data = data.split("\n");
                data.forEach(element => {
                    element = element.split(/[ ,]+/);
                    element.shift();
                    pslist.push(element);
                });
                pslist.shift();
                return pslist;
            }
        });
    }
}