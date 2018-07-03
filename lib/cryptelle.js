'use strict';

const cheerio = require('cheerio');
const request = require('request')

var baseUrl = "http://www.cryptellegram.com/"

const encrypt = (key, rawMessage ) => {


  request("http://www.cryptellegram.com/cryption/encrypt/", function (error, response, html){
    if(!error){
        var $ = cheerio.load(html)

        //find the input text box and insert message in textbox
        let input = $('[name=entekey]').attr("value", key)
        // let input_test = $('.tooltip').find('[name=entekey]')
        // console.log(test.html());

        //find the message text box and insert message in textbox
        let textbox = $('[name=entedata]').attr("value", rawMessage)
        // console.log(textbox);

        //send the encrypt button
        let newPage = $.html()
        console.log(newPage);

        //retrieve the encrypted message
    }
  })


}




const send = (encryptedMessage, senderName, senderEmail, receiveEmail, subject) => {
  console.log("Sending Message");
}


encrypt("Donald", "Trump 2020" )
