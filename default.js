var url = 'https://script.google.com/macros/s/AKfycbz8fCIZtUyOFt_HeJrEXl8PfiWdc1vXwPlvYlSWg3aNNdYLOARWGyg6px6pAfh2Ww0R/exec'






function action(action, e) {
    var xhr = new XMLHttpRequest();
    console.log(action);
    xhr.open('GET',  url + '?callback=ctrlq&action=' + action);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === XMLHttpRequest.DONE &&
          xhr.status === 200) {
        var result = JSON.parse(e.target.response);
        
        console.log(result)
        $("main").html(result);
      }
    }
    xhr.send();
    
}


$(document).ready(function(){
	$('.modal').modal({});
    
});

action('summary');