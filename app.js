const express = require('express');
const request = require('request');
const https = require('https');
 
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
 
app.use(express.static('public'));
 
app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
 
app.post('/', (req, res) =>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
 
    const data = {
        members:[{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }
 
    const jsonData = JSON.stringify(data);
 
    const url = "https://us1.api.mailchimp.com/3.0/lists/ac344b6ae4";
 
    const options = {
        method: "POST",
        auth: "danitacodes:9d5d4d45add076cdf0853889088c1ca2-us1"
    };
    const request = https.request(url, options, function(response){
            response.on("data", function(data){
            console.log(JSON.parse(data));
    })
    request.write(jsonData);
    request.end();
 
});
 
app.post("/failure.html", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
 
app.listen (3000, function(){
    console.log("Server is running");
});
 
  //API Key
//9d5d4d45add076cdf0853889088c1ca2-us1
 
//List ID
//ac344b6ae4
