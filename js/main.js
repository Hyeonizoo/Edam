$(document).ready(function(){
  AOS.init();

  // header scroll
  var lastScrollTop = 0, delta = 15; // delta는 mouse wheel을 의미
  $(window).on("scroll", function(event) {
    var st = $(this).scrollTop(); // 스크롤바 수직 위치를 가져와 st로 선언
    if (Math.abs(lastScrollTop - st) <= delta) return; // 스크롤값을 받아서 리턴
    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      $("header").css("top", "-70px"); // 스크롤 내렸을 때 header top값을 -60px로 변경
    } else {
      $("header").css("top", "0px"); // 스크롤 올렸을 때 header top값을 0px로 변경
    }
    lastScrollTop = st;

    // console.log(scrollY);
  });

  // popUp
  $('.bubble2').click(function(){
    $('.popUp').removeClass('hide');
  })
  $('.popUp').click(function(){
    $(this).addClass('hide');
  })

  // name
  var yourName = prompt('당신의 이름은 무엇인가요?', '이담');
  $('#name').text(yourName);

  // tab
  const tabArray = ['1단계','2단계','3단계',];
  const selectArray = ['1단계 | 퇴직자 후유증 심각단계','2단계 | 퇴직자 후유증 경미단계','3단계 | 퇴직자 후유증 극복단계'];
  
  const arrayInit = function(){
    $('.tabList').children('li:eq(0)').text(selectArray[0]);
    
    for(i=0; i<3; i++){
      $('.tabList').children('li:eq('+i+')').text(tabArray[i]);
    }
  }
  arrayInit();

  $(function(){
    $('.tabList').children('li:eq(0)').text(selectArray[0]);
  })

  $('.tabList li').click(function(){
    const index = $(this).index();
    $('.tabList li').removeClass('active');
    arrayInit();
    $(this).addClass('active');
    $('.tabList').children('li:eq('+index+')').text(selectArray[index]);
    $('.contList li').removeClass('active');
    $('.contList li').eq(index).addClass('active');
  });

  $(function(){
    var idx = 0;
    setInterval(service2, 1100);
    function service2(){
      var box = $('.sb');
      var text = $('.st');
      var img = $('.app02');
      box.removeClass('active');
      text.removeClass('active');
      box.eq(idx).addClass('active');
      text.eq(idx).addClass('active');
      img.css("background-image","url('./img/app02-"+idx+".png')");
      console.log(idx);
      idx++;
      if(idx >= box.length) idx= 0;
      for(i=0; i<3; i++);
    };
  });

  // toggle - 나중에 for문써서 다시
  $('input').click(function(){
    if($('#step1').is(':checked')){
        $('.app04').toggleClass('move');
    }else {
      $('.app04').removeClass('move');
    }
    if($('#step2').is(':checked')){
      $('.app05').addClass('move');
    }else{
        $('.app05').removeClass('move');
    }
    if($('#step3').is(':checked')){
      $('.app06').addClass('move');
    }else{
        $('.app06').removeClass('move');
    }
  })
});
