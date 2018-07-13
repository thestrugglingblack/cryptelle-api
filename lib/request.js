// 'use strict'
const XMLHttpRequest = require('xhr2');
var FormData = require('form-data');
//
const encrypt = (key, rawMessage ) => {
  var XHR = new XMLHttpRequest();
  var form = new FormData();

  form.append("entekey", key)
  form.append("entedata", rawMessage)
  console.log("FormData",  form);
  XHR.open('POST','http://www.cryptellegram.com/cryption/encrypt/', { headers: { 'Content-Type': 'multipart/form-data' } })
  XHR.send(form)
}

encrypt("Donald", "Trump 2020")

// var FormData = require('form-data');
// var request = require('request');
//
// var form = new FormData();
//
// form.append('my_field', 'my value');
// // form.append('my_buffer', new Buffer(10));
// form.append('my_logo', request('http://nodejs.org/images/logo.png'));
