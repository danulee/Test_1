$(document).ready(function(){
  function MenuBar__init() {
    $('.menu-bar .menu-box-1 > ul > li').click(function () {
      var text = $(this).find(' > a').text();
  
      alert('당신은 ' + text + '(을)를 클릭했습니다.');
    });
  }
  MenuBar__init();
  
  function TopBar__init() {
  
  }
  TopBar__init();
});