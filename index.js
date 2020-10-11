$(".vibrate1").on('click',function(){
    //  1 秒振動
    navigator.vibrate(1000);
    });

var color = ''
$('.dropdown-item').on('click', function(){
    color =  $(this).data('id');
    $("show_color").text(color);
});

$(function() {
    $(".change1").click(function() {
      // cssで背景色をブルーに変更
      $(".box1").css("background-color", color);
    });
    // ピンク
    $(".change2").click(function() {
      // cssで背景色をピンクに変更
      $(".box2").css("background-color", color);
    });
    // リセット
    $(".change3").click(function() {
      // cssで背景色をデフォルトに変更
      $(".box3").css("background-color", color);
    });
  });