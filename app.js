const utils = require("auto-load")("./utils"), // require all files from utils
      express = require("express");
      app = express();
      port = process.env.PORT || 8080;

app.use(express.static("static"));


app.use("/homework", (request, response) => {
   let subject = request.query.subject;
   if (subject){
       if (utils.validSubjects.includes(subject)) {
           response.send(`${subject} hw`);
       }else{
           utils.statusHandler.statusHandler(response, 404);
       }
   } else{
       response.sendFile(`${__dirname}/static/pages/homeworkMain.html`);
   }
});

app.use("/index.html", (request, response) => {
    response.sendFile(`${__dirname}/static/pages/index.html`);
});



app.listen(port, () => console.log("Server is up"));
