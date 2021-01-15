var exec = require('child_process').exec;

function getPID(app, callback) {
    var arg = 'pgrep ' + app;
    exec( arg, function(err, stdout, stderr) {
        if (err) {
            console.log('Error:' + ' ' + stderr);
            callback(-1);
        } else {
            var data = stdout;
            console.log(data);
            callback(data.trim());
        }
    });
}

function checkStatus(pid) {
    if (pid !== -1) {
        let path = `/proc/${pid}/status`;
        let cmd = 'cat ' + path + ' | grep ^State';
        exec(cmd, (err, stdout, stderr)=> {
            if (err) {
                console.log('Error:' + ' ' + stderr);
            } else {
                var data = stdout;
                console.log(data.trim());
            }
        });
    }
}


module.exports = {
    checkStatus,
    getPID
}