Emailer = require ("./lib/emailer");
options ={
    from: '"xxxx Group" <register-noreply@xxx.com>', // sender address
    to:{
       email :'hbu@localhost', // list of receivers
       cc :'xxxxx@xxx.com', 
       bcc:'xxxx@gmail.com', 
       name: "Test",
       surname: "T"
    },
    subject: "Please active your account", // Subject line
    template: "reg_active.ejs"
};
data ={
  /*name: "Bush",
  surname: "Jeb",*/
  name: options.to.name,
  surname: options.to.surename,
  id: "2_reg_active_id"
}
emailer = Emailer (options, data);
