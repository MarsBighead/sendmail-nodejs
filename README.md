# sendmail-nodejs

Example for use sendmail built on nodejs combine with module nodemailer, ejs. The example follow the MVC method to release the package email with JSON data goal.It need can run in Linux/Uinx platform with sendmail.

## Install with npm

```shell
[hbu@localhost sendmail-nodejs]$ npm install
npm WARN The package ejs is included as both a dev and production dependency.
npm WARN The package moment is included as both a dev and production dependency.
npm WARN The package nodemailer is included as both a dev and production dependency.
npm WARN The package nodemailer-sendmail-transport is included as both a dev and production dependency.

added 4 packages from 9 contributors and audited 4 packages in 0.983s
found 0 vulnerabilities

```

## Run with node

```shell
[hbu@localhost sendmail-nodejs]$  node send.js
Template name is reg_active.ejs
2018-12-10 11:47:24 Read content of template reg_active.ejs successfully!
2018-12-10 11:47:24 Parse template reg_active.ejs to HTML successfully!
2018-12-10 11:47:24 The email is sent to the recipient list duanp@localhost

```

## Check result with command mail

```shell
[hbu@localhost sendmail-nodejs]$  mail
Mail version 8.1 6/6/93.  Type ? for help.
"/var/mail/duanp": 1 message 1 new
>N  1 register-noreply@mar  Mon Dec 10 11:47  37/1090  "Please active your account"
? 1
Message 1:
From register-noreply@mars.com  Mon Dec 10 11:47:25 2018
X-Original-To: duanp@localhost
Delivered-To: duanp@localhost
Content-Type: text/html
From: Mars Group <register-noreply@mars.com>
To: Mars Bighead <duanp@localhost>
Subject: Please active your account
Content-Transfer-Encoding: quoted-printable
Date: Mon, 10 Dec 2018 03:47:24 +0000
MIME-Version: 1.0

<html>
<body>
<div>Hi Mars ,<br><br>
    <span style=3D"white-space:pre-wra=
p">    </span>
    Welcome to use our websit!<br><br>
   =20
   =20
    <p><span style=3D"white-space:pre-wrap">    </span>
        Please click the follow link to accomplish your registiration =
process:<br>
        <span style=3D"white-space:pre-wrap">    </span>
        http://127.0.0.1/accounts/register?confirmation=3D1</p>
    <br><br>

--mars.com<br><br>
This is an automatic email, please do not reply!<br>

</div>
</body>
</html>

? 

```

## Notice

If your sendmail application is not the direactory as the lib/emailer.js show, please change the path to follow yours.

sendmail-nodejs default path: '/usr/sbin/sendmail'

your path: '/usr/sbin/sendmail'
