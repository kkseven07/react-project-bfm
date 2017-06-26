var webshot = require("webshot");
var options = {
    screenSize: {
        width: 2048,
        height: 2048
    },
    shotSize: {
        width: 2048,
        height: 2048
    },
    phantomPath:"/Users/ilyasmalgazhdarov/.nvm/versions/node/v7.4.0/bin/phantomjs",
    renderDelay:3000,
    // timeout:5000,
    userAgent: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)" +
        " AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g"
};
webshot(
    "http://localhost:8080/pages/266/intro",
    "google.png",
    options,
    function(err) {
        console.log(err);
    }
);
