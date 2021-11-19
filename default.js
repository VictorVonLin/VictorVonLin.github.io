var url = 'https://script.google.com/macros/s/AKfycbz8fCIZtUyOFt_HeJrEXl8PfiWdc1vXwPlvYlSWg3aNNdYLOARWGyg6px6pAfh2Ww0R/exec'
var current = 'summary';

var loader = '<div class="progress"><div class="indeterminate"></div></div>'

function action(action, e) {
    var xhr = new XMLHttpRequest();
    $("#nav-mobile").children().removeClass("active");
    $("#"+action).addClass("active");
    $("main").html(loader);
    // console.log(action);
    xhr.open('GET',  url + '?callback=ctrlq&action=' + action);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === XMLHttpRequest.DONE &&
          xhr.status === 200) {
        var result = JSON.parse(e.target.response);
        $("main").html(result);
        inits();
      }
    }
    xhr.send();
    
}


function inits(){
  $('.parallax').parallax();
}

$(document).ready(function(){
	$('.modal').modal({});
  inits();
});

action('summary');