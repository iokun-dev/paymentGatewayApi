var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var request = require('request');
exports.sendMailToUser = function (inputJson, res) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "ezimaxtech@gmail.com",
            pass: "India@1234"
        }
    });
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'ezimaxtech@gmail.com', // sender address
        //to: 'raghvendraguptaggj@gmail.com', // list of receivers
        to: inputJson, // list of receivers
        subject: 'Thanks for choosing product from presto', // Subject line
        //text: 'Hello world ?', // plaintext body
        html: '<div class="col-sm-12 mt pd">'

        +'<div class="container-fluid">'
    
           +'<div class="newsletter2">'
    
                +'<div class="box_shadow mt-2">'
    
                    
                    +'<div class="" style="background-color:#3498DB;">'
                        +'<div class="main_content px-5">'
                            +'<h3 class="text-justify text-white">Success ! Your Order with ID FL96601289 is confirmerd.</h3>'
                        +'</div>'
                    +'</div>'
                    +'<div class="px-4 py-4">'
                    +'<div class="row">'
                        +'<div class="col-sm-12">'
                        +'<div class="col-sm-7 pl-0">'
                            +'<img src="http://18.220.90.101:8080/api/getFileRead?filename=prestou-logo.png" class="img-fluid" style="height: 100px">'
    
                        +'</div>'
                        +'<div class="col-sm-5 text-right pr-0 mt-3">'
                            +'<!--<p class="mb">+91-80761-61661</p>-->'
                            +'<div class="navbar-nav pull-right">'
                                +'<ul class="list-inline">'
                                    +'<li><a href="">Your Orders</a></li>'
                                    +'<li><a href="">Your Account</a></li>'
                                    +'<li><a href="">Prestou.in</a></li>'
    
                                +'</ul>'
                            +'</div>'
    
                        +'</div>'
                    +'</div>'
                   +'</div>'
                    +'</div>'
                    +'<hr>'
                    +'<div class="">'
                    +'<div class="row">'
                        +'<div class="col-sm-12">'
                            +'<div class="text-right main_content px-5">'
                               + '<h3 class="mt-0">Order Confirmation</h3>'
                               + '<p>Order ID : FL96601289</p>'
                           + '</div>'
                        +'</div>'
                   + '</div>'
                   + '</div>'
                    +'<div class="px-4">'
                       + '<div class="left_align main_content">'
                            +'<h3> <span class="pink">Hello User..</span></h3>'
                           + '<p class="left_align grey mt-4" style="color: #333333">Thank you for your order. We will send a confirmation when your'
                            + 'order ships. Your estimated delivery date is indicated below. If you would like to view the status of your order or make' + 'any changes to it. please visit <a href="#">Your Orders</a> on Prestou.in.</p>'
                        +'</div>'
                    +'</div>'
                    +'<div class="part">'
                    +'</div>'
    
                    + '<div class="footer_section" style="background: #f6f6f6;padding: 1rem;">'
                       +'<div class="row px-4">'
                            +'<div class="col-sm-12">'
                        +'<div class="col-sm-6">'
                            +'<div class="regards">'
                                +'<h5 class="mt-4 " style="">Arriving,</h5>'
                                +'<h5 style="font-weight: bold;" class="mt-0">Monday, May 13</h5>'
                            +'</div>'
                        +'</div>'
                        +'<div class="col-sm-6">'
                            +'<div class="regards">'
                                +'<h5 class="mt-4 " style="">Your order will be sent to:</h5>'
                                +'<h5 style="font-weight: bold;" class="mt-0">Pooja</h5>'
                                +'<p>Room No-205, Sukhrali Sector 17</p>'
                            +'</div>'
                        +'</div>'
                                +'<div class="col-sm-6">'
                                    +'<div class="regards">'
                                        +'<h5 class="mt-4 " style="">Your shipped speed:</h5>'
                                        +'<h5 style="font-weight: bold;" class="mt-0">One-Day Delivery at Rs. 100 FREE with Prime</h5>'
                                        +'<button type="button" class="btn btn-success">View Order</button>'
                                    +'</div>'
                                +'</div>'
                    +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="left main_content  py-5 px-5">'
                        +'<h4 style="" class="pink">Order Details</h4><hr>'
                        +'<div class="">'
                            +'<div class="px-5 py-5">'
                                +'<div class="blog-post">'
                                    +'<h4 class="blog-post-title">Order FL96601289</h4>'
                                    +'<p class="blog-post-meta mt-4">Placed on Sunday , May 12, 2019</p>'
    
                                    +'<div class="information-blocks">'
                                        +'<div class="table-responsive">'
                                            +'<table class="cart-table">'
                                                +'<tbody>'
                                                
                                                +'<tr>'
                                                    +'<td>'
    +'<img src="http://18.220.90.101:8080/api/getFileRead?filename=free-1001sr148-swaron-original-imaff7yy2xhnfmka__imgsr9n9ahls.jpeg" class="img-responsive width">'
                                                    +'</td>'
                                                    +'<td colspan="2">'
                                                        +'<div class="traditional-cart-entry">'
                                                            +'<a href="#" class="image"><img src="" alt=""></a>'
                                                            +'<div class="content">'
                                                                +'<div class="cell-view">'
                                                                    +'<a class="tag ng-binding"></a>'
                                                                    +'<a class="title ng-binding">Animal Print, Printed Kalamkari <br>Art Silk, Printed Silk Saree</a>'
                                                                    +'<div class="inline-description"></div>'
                                                                    +'<div class="inline-description"></div>'
                                                                +'</div>'
                                                            +'</div>'
                                                        +'</div>'
                                                    +'</td>'
                                                    +'<td class="">$ 10</td>'
    
                                                +'</tr>'
                                                +'<tr style="padding: 1rem !important;">'
                                                        +'<td colspan="2">'
    
                                                    +'</td>'
                                                    +'<td>  <label class="pull-right">Subtotal</label></td>'
                                                    +'<td> <div class="totals">'
                                                        +'<div class="totals-item ">'
                                                            +'<div class="totals-value">71.97</div>'
                                                        +'</div>'
                                                    +'</div>'
                                                    +'</td>'
                                                +'</tr>'
                                                    +'<tr>'
                                                    +'<td colspan="2"></td>'
                                                    +'<td><label class="pull-right">Shipping & Handling</label></td>'
                                                    +'<td> <div class="totals">'
                                                        +'<div class="totals-item ">'
                                                            +'<div class="totals-value">$ 100</div>'
                                                        +'</div>'
                                                    +'</div>'
                                                    +'</td>'
                                                +'</tr>'
                                                +'</tbody>'
                                            +'</table>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
    
                +'</div>'
    
            +'</div>'
        +'</div>'
    
    +'</div>'
    +'<div class="clearfix"></div>'
    
    
    
    
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //res.status(200).json({ success: false, message: "Message not sent"});
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

exports.sendOrderMailToUser = function (email, subject, content, res) {
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "ezimaxtech@gmail.com",
            pass: "India@1234"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // setup e-mail data with unicode symbols
    var newHtml = 'Send Mail'
   
    var mailOptions = {
        from: 'ezimaxtech@gmail.com', // sender address
        //to: 'raghvendraguptaggj@gmail.com', // list of receivers
        to: email, // list of receivers
        subject: content, // Subject line
        //text: 'Hello world ?', // plaintext body
        html: '<div class="col-sm-12 mt pd">'
        +'<div class="container-fluid">'
           +'<div class="newsletter2">'
                +'<div class="box_shadow mt-2">'   
                    +'<div class="" style="background-color:#3498DB;">'
                      
                    +'</div>'
                    +'<div class="px-4 py-4">'
                    +'<div class="row">'
                        +'<div class="col-sm-12">'
                                          
                    +'</div>'
                   +'</div>'
                    +'</div>'  
                    +'<div class="px-4">'
                       + '<div class="left_align main_content">'                          
                           + '<p class="left_align grey mt-4" style="color: #333333">'+subject+'</p>'
                        +'</div>'
                    +'</div>' 
                +'</div>'    
            +'</div>'
        +'</div>'    
    +'</div>'
    +'<div class="clearfix"></div>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //res.status(200).json({ success: false, message: "Message not sent"});
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};


// exports.sendsms = function (inputJson, res) {
//     let message = 'Greetings of the Day,Thank you for enquiring about our eziplay school, we value your interest. Our representative will get back to you with in 24 to 48 hours. Regards Eziplay school 80761-61661';
//     request('http://admagister.net/api/mt/SendSMS?user=EZISCH2018&password=EZISCH2018&senderid=EZISCH&channel=trans&DCS=0&flashsms=0&number=' + inputJson + '&text=' + message + '&route=14', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log("message send successfully ");
//         }
//     });
// };


// exports.bulkSendSms = function (sendData) {
//      request('http://admagister.net/api/mt/SendSMS?user=EZISCH2018&password=EZISCH2018&senderid=EZISCH&channel=trans&DCS=0&flashsms=0&number=' + sendData.mobileNo + '&text=' + sendData.message + '&route=14', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log("message send successfully ");
//         }else{
//             console.log(error);
//         }
//     });
// }
