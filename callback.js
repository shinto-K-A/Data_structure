function doSomethingAsync(callback) {
      setTimeout(function() {
        callback('done');
      }, 5000);
    }
    
    function callbackFunction(result) {
      console.log('Result:', result);
    }
    
    doSomethingAsync(callbackFunction);
    