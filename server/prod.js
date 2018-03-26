/* eslint no-console: 0 */
const express = require("express"),
    opn = require("opn"),
    http = require("http"),
    app = express();

// Added timestamp to the console logs
require ('console-stamp')(console, "HH:MM:ss.l");

app.use(express.static("./dist"));

// Added the index file to responte to the root GET
app.get("/", (req,res) => {
  
    res.sendFile(`${__dirname}index.html`);

});

if (require.main === module) {

    // Creating the server and logging the location it listens
    const server = http.createServer(app);
    server.listen(process.env.PORT || 80);

}