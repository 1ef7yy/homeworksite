const utils = require("auto-load")("./utils"); // require all files from utils
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("static"));


app.use("/homework", (request, response) => {
   let subject = request.query.subject;
   if (utils.validSubjects.includes(subject)) {
       response.send(`${subject} hw`);
   } else {
       response.sendStatus(404);
   }
});

app.use("/index.html", (request, response) => {
    response.sendFile(`${__dirname}/static/pages/index.html`);
});

app.listen(port, () => console.log("Server is up"));
