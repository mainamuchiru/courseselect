const express = require('express');
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;
const bodyParser = require ('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});

app.set('views' , 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// BMI
//const { bmiCalc } = require('./bmi.js')



app.get('/home', function (request, response){
    response.render('homepage');

    app.post('/istcourses',urlEncodedParser, function ist(request, response){
        var ISTa = "IST3005"
        // var ISTb= request.body.height;
        // var ISTc = myweight/(myheight*myheight);
      
       // var status = bmiCalc(BMI);
    
        var info = {fcourse: ISTa};
        response.render("courses", info);       
    
    
    });


    app.post('/aptcourses',urlEncodedParser, function ist(request, response){
        var APTa = "APT3020"
        // var ISTb= request.body.height;
        // var ISTc = myweight/(myheight*myheight);
      
       // var status = bmiCalc(BMI);
    
        var infoap = {fcourse: APTa};
        response.render("courses", infoap);       
    
    
    });


});

app.listen(port);
console.log(`server is listening on port ${port}`);