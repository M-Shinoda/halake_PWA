$(".vibrate1").on('click',function(){
    //  1 秒振動
    navigator.vibrate(1000);
    });
function vibratePattern() {
      navigator.vibrate([100, 200, 200, 200, 500]);
      }