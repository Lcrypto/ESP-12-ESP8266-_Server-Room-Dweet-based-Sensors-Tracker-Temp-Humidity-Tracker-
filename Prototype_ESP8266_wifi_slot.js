var SSID = 'sid';
var PASSWORD = 'pass';
var NAME = 'dweetname';
var dweet = require('dweetio').connect(NAME);
var dht = require("DHT11").connect(D4);
dht.read(function (a) {console.log("Temp is "+a.temp.toString()+" and RH is "+a.rh.toString());});




//const minute = 1000 * 60;
//const hour = minute * 60;
//const day = hour * 24;
//const year = day * 365;

// Divide Time with a year

//let years = Math.round(d.getTime() / year);
//print(years);



function run() {
  setInterval(function() {
   const d = Date();
   dayOfMonth = d.getDate();
   monthIndex = d.getMonth();
   currentHour = d.getHours();
    dht.read(function(a) {
      dweet.send({
        Temperature: a.temp,
        Humidity: a.rh ,
        Time_Hour:currentHour,
        Time_Days:  dayOfMonth,
        Time_month: monthIndex
      });
    });
  }, 3000);
}



//var wifi =require("Wifi");
//wifi.connect(SSID,{password:PASSWORD},function(e){
//if(e){
//console.log('error during connect:',e);
//wifi.disconnect();
//}else{
//console.log('connected to',SSID);
//wifi.stopAP();
//wifi.save();
//}
//});

var wifi = require("Wifi");
wifi.connect("A", {password:PASSWORD}, function(ap){ console.log("connected:", ap); });
print('Click this link', dweet.follow());
run();


//var wifi = require("Wifi").setup(function(err) {
//  wifi.connect(SSID, PASSWORD, function(err) {
//    print('Click this link', dweet.follow());
//    run();
//  });
//});