document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

$(".vibrate1").on('click',function(){
    //  1 秒振動
    navigator.vibrate(1000);
    });

var color = ''
$('.dropdown-item').on('click', function(){
    color =  $(this).data('id');
    $(".show_color").text(color);
    console.log(color)
});

$(function() {
    $(".change1").on('click',function() {
      $(".box1").css("background-color", color);
    });
    $(".change2").on('click',function() {
      $(".box2").css("background-color", color);
    });
    $(".change3").on('click',function() {
      // cssで背景色をデフォルトに変更
      $(".box3").css("background-color", color);
    });
  });