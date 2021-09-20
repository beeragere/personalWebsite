
//BEB84449D40A09402A76C2C728B5CE72A709522B885781ACCDB6F4613DD68344D5F03E751A187CD5BCB27883D8ED9175


Email.send({
    SecureToken : "1cf1656b-23b4-4b2a-b562-08f0b1381e13",
    To : "beeragere@gamil.com",
    From : "beeragere@gmail.com",
    Subject : "This is the subject",
    Body : "hello world"
}).then(
  message => {
    console.log(message);
  } 
);