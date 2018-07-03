'use strict';

const cheerio = require('cheerio');
const request = require('request')

var baseUrl = "http://www.cryptellegram.com/"

const encrypt = (key, rawMessage ) => {


  request("http://www.cryptellegram.com/cryption/encrypt/", function (error, response,html){
    if(!error){
        var $ = cheerio.load(html)

        //find the input text box
        let input = $(".tooltip").children().text()
        console.log(input);


          //find the message text box

          //insert key in text box

          //insert message in textbox

          //send the encrypt button

          //retrieve the encrypted message
    }
  })


}

const send = (encryptedMessage, senderName, senderEmail, receiveEmail, subject) => {
  console.log("Sending Message");
}


encrypt("Donald", "Trump 2020" )
