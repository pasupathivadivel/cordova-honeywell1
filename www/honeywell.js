var exec = require('cordova/exec');

var honeywell = {
    listenForScans: function(success, failure) {
        alert("ssasssssssssssss");
        return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
    }
};

module.exports = honeywell;
