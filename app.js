const express = require('express');
const https = require('https');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Server is running');
})

https.get(, res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());

    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});


app.post("/", function(req, res){
 var firstName = req.body.fname;
 var lastName = req.body.lname;
 var email = req.body.email;
})
