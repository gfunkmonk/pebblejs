
var tests = {};

tests.setTimeoutErrors = function () {
  /* global wind */
  var i = 0;
  var interval = setInterval(function() {
    clearInterval(interval);
    wind.titlex('i = ' + i++);
  }, 1000);
};

tests.ajaxErrors = function() {
  var ajax = require('../lib/ajax');
  var ajaxCallback = function(reqStatus, reqBody, request) {
    console.logx('broken call');
  };
  ajax({ url: 'http://www.google.fr/' }, ajaxCallback, ajaxCallback);
};

tests.geolocationErrors = function () {
  navigator.geolocation.getCurrentPosition(function(coords) {
    console.logx('Got coords: ' + coords);
  });
};

tests.loadAppinfo = function() {
  console.log('longName: ' + require('/package').pebble.displayName);
};

tests.resolveBultinImagePath = function() {
  var ImageService = require('./imageservice');
  console.log('image-logo-splash = resource #' + ImageService.resolve('images/logo_splash.png'));
};

for (var test in tests) {
  console.log('Running test: ' + test);
  tests[test]();
}
