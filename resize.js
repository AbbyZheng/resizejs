document.documentElement.style.fontSize = 100 * innerWidth / 375 + 'px'
  addEventListener('load', function() {
    setTimeout(function(){
       document.documentElement.style.fontSize = 100 * innerWidth / 375 + 'px'
       window.unit = 100 * innerWidth / 375;
       var e = document.createEvent('Event');
       e.initEvent('adjustReady', true, true);
       window.dispatchEvent(e);
    }, 480);
  })
  addEventListener('orientationchange', function() {
      setTimeout(function(){
        document.documentElement.style.fontSize = 100 * innerWidth / 375 + 'px'
      }, 480)

  });