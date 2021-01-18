const { getPID } = require("./core")

module.exports = {
    murder: (process, callback) => {
        let proc_id;
        if (!isNaN(process))
            proc_id = process;
        else
            proc_id = getPID(process, a => {
                return a;
            });
        console.log(proc_id);
        console.log("Killing Process ID: " + process);
        // Actually Kill It
    }
}