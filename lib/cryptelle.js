'use strict';

const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');
var FormData = require('form-data');


var baseUrl = "http://www.cryptellegram.com/"

const encrypt = (key, rawMessage ) => {

  request("http://www.cryptellegram.com/cryption/encrypt/", function (error, response, html){
    if(!error){

        var form = new FormData();

        form.append("entekey", key)
        form.append("entedata", rawMessage)

        axios('http://www.cryptellegram.com/cryption/encrypt/',
              form,
              {
                headers: form.getHeaders()
              }).then((res)=> {

              if(res.status === 200){
                const sessionIDExtract = res.headers["set-cookie"][0]
                const sessionRegex = new RegExp('session=(.*?);')
                const sessionID = sessionIDExtract.match(sessionRegex)[0]

                // console.log("Successfully Posted form ====>", res.headers["set-cookie"][0]);

                const cookie = request.cookie(sessionID)
                var options = {
                  url: 'http://www.cryptellegram.com/cryption/rsltenc/',
                  headers: { Cookie: cookie }
                }

                request(options, function (error, data) {
                  if (error){
                    console.log("ERROR in redirect", error);
                  }
                  console.log("CAUGHT DATA FROM REDIRECT",data.body);
                })


                // axios.get('http://www.cryptellegram.com/cryption/rsltenc/').then((res)=>{
                //   console.log("Getting encrpted data", res);
                // })
              }

        }).catch((err) => {
          console.log("Error", err);
        })

        //retrieve the encrypted message
    }
  })


}

// https://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
// https://www.reddit.com/r/node/comments/2mulfm/posting_to_a_login_form_with_node/


const send = (encryptedMessage, senderName, senderEmail, receiveEmail, subject) => {
  console.log("Sending Message");
}


encrypt("Donald", "Trump 2020" )


// var $ = cheerio.load(html)
//
// //find the input text box and insert message in textbox
// let input = $('[name=entekey]').attr("value", key)
// // let input_test = $('.tooltip').find('[name=entekey]')
// // console.log(test.html());
//
// //find the message text box and insert message in textbox
// let textbox = $('[name=entedata]').attr("value", rawMessage)
// // console.log(textbox);
//
// //send the encrypt button
// let finalForm =  $('[name=enc_sect]').html()
//
// var sendInput = encodeURIComponent(key)
//
// var sendTextData = encodeURIComponent(rawMessage)
// //POST, contenttype:  text/html; charset=utf-8 http://www.cryptellegram.com/cryption/encrypt/
