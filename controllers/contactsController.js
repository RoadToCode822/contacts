var data = [
  {
    name: "John Doe",
    phone: 416 888 8888,
    address: '26 lane street, toronto, ON'
  },
  {
    name: "Jane Doe",
    phone: 416 232 2232,
    address: '1 Washington street, toronto, ON'
  },
  {
    name: "Jason Doe",
    phone: 416 444 4444,
    address: '13 Bovaird street, toronto, ON'
  }
]

module.exports = function(app){
  app.get('/contacts', function(req, res){
    res.render('contacts', contactList: data);
  });

  app.post('/contacts', function(req, res){
    
  });

  app.delete('/contacts', function(req, res){
    
  });

};