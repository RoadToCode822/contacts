const bodyParser = require('body-parser');
const path = require('path');



var data = [
  {
    name: "John Doe",
    phone: 4168888888,
    address: '26 lane street, toronto, ON'
  },
  {
    name: "Jane Doe",
    phone: 4162322232,
    address: '1 Washington street, toronto, ON'
  },
  {
    name: "Jason Doe",
    phone: 4164444444,
    address: '13 Bovaird street, toronto, ON'
  }
]

module.exports = function(app){
  
  app.get('/contacts', function(req, res){
    res.render('contacts', {contacts: data});
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  app.post('/contacts/addNew', function(req, res){
    
    

    res.setHeader('Content-Type', 'application/json');
    
    var name = req.body.name;
    var phone = req.body.phone;
    var address = req.body.address;
    
    console.log(name);

    res.send('Success');

  });

  app.post('/contacts', function(req, res){
    
  });

  app.delete('/contacts', function(req, res){
    
  });

};