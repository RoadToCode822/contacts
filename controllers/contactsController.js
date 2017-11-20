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

  app.post('/contacts', function(req, res){
    
  });

  app.delete('/contacts', function(req, res){
    
  });

};