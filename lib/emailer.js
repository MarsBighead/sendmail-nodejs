var nodemailer = require("nodemailer")
var fs = require("fs")
var ejs = require('ejs');
var moment = require('moment');
var date = Date();
var sendmailTransport = require('nodemailer-sendmail-transport');

var Emailer = function (options,data) { 
    var getTransport=nodemailer.createTransport(sendmailTransport({
        path: '/usr/sbin/sendmail.sendmail'
    }));
      
    console.log('Template name is '+ options.template); 
    var getHtml= function (templateName, data){
        templatePath =__dirname+ "/../views/";
        template = templatePath+templateName;
        templateContent = fs.readFileSync(template, encoding="utf8");
        log("Read content of template "+templateName+" successfully!");
        return ejs.render( templateContent, data); 
    };
    var send = function(callback){
        html = getHtml(options.template, data);
        if(html){
            log("Parse template "+options.template+" to HTML successfully!");
            messageData ={
                to: options.to.name+ " "+options.to.surname+" <"+ options.to.email+">",
                /*cc: options.to.name+ " "+options.to.surname+" <"+ options.to.cc,
                bcc: options.to.name+ " "+options.to.surname+" <"+ options.to.bcc,*/
                from: options.from,
                subject: options.subject,
                html: html,
                generateTextFromHTML: true
                //attachments: attachments
            };
            log("The email is sent to the recipient list "+options.to.email);
            transport = getTransport;
            transport.sendMail( messageData, callback);
            return  1;
        }else{
            log(options.template+" parse template to HTML failed!");
            return  0;
        }
     
    };
    function logTime(){return moment().format('YYYY-MM-DD HH:mm:ss'); }
    //getHtml(options.template, data);
    send((error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        //transporter.close();
    });
    return 0;
};

var log= function log(logMsg){
    console.log(moment().format('YYYY-MM-DD HH:mm:ss')+"	"+logMsg);
};
module.exports = Emailer
