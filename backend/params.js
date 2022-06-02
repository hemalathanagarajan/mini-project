const express = require('express');
const app = express();
const port = 8000;

var book = express.Router();
app.use('/book', book);

var author = express.Router();
app.use('/author', author);// creating a new context

//context 1.finance
book.get('/fiction/:title/:noofcopies', function (request, response) {
 var title = request.params['title'];
 console.log(`Title ${title} `);
 var noOfCopies = request.params['noofcopies'];
 console.log(noOfCopies);
 response.send(`Book ordered ${title} . No of Copies ${noOfCopies}`);
});
//context 2.romance

book.get('/romance/:title/:author', function (request, response) {
 // var title = request.params['title'];
 var title = request.params.title;
 console.log(`Title ${title} `);
 // var author = request.params['author'];
 var author = request.params.author;
 console.log(author);
 response.send(`Book ordered ${title} . By Author ${author}`);
});

app.get('/', (request, response) => {
 response.send('Welcome to Book world');
});
app.listen(port, (err) => {
 if (err) {
  return console.log('something bad happened', err);
 }

 console.log(`server is listening on http://localhost:${port}`);
});

