Emailer = require ("./lib/emailer");
options ={
    from: '"Mars Group" <register-noreply@mars.com>', // sender address
    to:{
       email :'duanp@vmware.com', // list of receivers
       cc :'xxxxx@xxx.com', 
       bcc:'xxxx@gmail.com', 
       name: "Mars",
       surname: "Bighead"
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
