const utils = require("auto-load")("./utils"), // require all files from utils
      express = require("express");
const {response} = require("express");
      app = express();
      port = process.env.PORT || 3000
      ;

app.use(express.static("static"));

app.post('/', (request, response, next) => {
    next("index.html");
}); // normal redirecting with response.redirect() didnt work :(

app.use("/homework.html", (request, response) => {
   let subject = request.query.subject;
   if (subject){
       if (Object.keys(utils.validSubjects).includes(subject)){
           response.send(`${subject} hw`);
       } else {
           utils.statusHandler.statusHandler(response, 404);
       }
   } else {
       response.sendFile(`${__dirname}/static/pages/homeworkMain.html`);
   }
});


app.use("/index.html", (request, response) => {
    response.sendFile(`${__dirname}/static/pages/index.html`);
});




app.listen(port, () => console.log("Server is up"));
