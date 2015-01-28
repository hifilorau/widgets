app.Timer = function(spec){
  //interval defaults to 1 second
  var interval = spec.interval || 1000;

  //callback is the logic that we want to run every time the server fires
  var callback = spec.callback;

  //this is the value that we need to pass to clearTimeout in order to stop
  //the timeout from recurring

  // var timeoutID;

  var stopped = false;

  var self = {
    start: function (){
      stopped = false;
      callback();

      function intervalElapsed(){
        if (stopped) {
          return;
        }

        callback();
        timeoutID = setTimeout(intervalElapsed, interval);
      }

      timeoutID = setTimeout(intervalElapsed, interval);

    },

    stop: function (){
      stopped = true;
      clearTimeout(timeoutID);
    }
  };
  return self;
};

//// another test
var count = 0;
var myTimer = app.Timer({
  interval: 500,

  callback: function() {
    ++count;
    console.log("Hello");

    if (count > 10) {
      myTimer.stop();
    }
  }

});

myTimer.start();
//revmoe this later

// var test = app.Timer({callback: function(){
//     console.log("Hello");
// }
// });
//
// test.start();
