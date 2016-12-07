Emailer = require ("./lib/emailer");
options ={
    from: '"xxxx Group" <register-noreply@xxx.com>', // sender address
    to:{
       email :'hbu@localhost', // list of receivers
       cc :'duanmhy@139.com', 
       bcc:'duanmhy@126.com', 
       name: "TestToger",
       surname: "T"
    },
    subject: "Please active your account", // Subject line
    template: "reg_active.ejs"
};
data ={
  /*name: "Paul",
  surname: "Duan",*/
  name: options.to.name,
  surname: options.to.surename,
  id: "2_reg_active_id"
}
emailer = Emailer (options, data);
