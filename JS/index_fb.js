function AnswerStatus (ans, status) {
  var answer = '';
  if(ans == 1){
    answer = 'a';
  }
  else if (ans == 2){
    answer = 'b';
  }
  else if (ans == 3){
    answer = 'c';
  }
  
  if(status == 0) {
    $('#answer-' + answer + ' .ans-letter').css('background-image', "url('https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/ph%C6%B0%C6%A1ng%20%C3%A1n.png?v=1738762364707')");
    $('#answer-' + answer + ' .ans-text').css('background-image', "url('https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/%C4%91%C3%A1p%20%C3%A1n.png?v=1738762380503');    
  }
  else if(status == 1) {
    $('#answer-' + answer + ' .ans-letter').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/ph%C6%B0%C6%A1ng%20%C3%A1n%20ch%E1%BB%91t.png?v=1738772828836');
    $('#answer-' + answer + ' .ans-text').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/%C4%91%C3%A1p%20%C3%A1n%20ch%E1%BB%91t.png?v=1738772831196');    
  }
  else if(status == 2) {
    $('#answer-' + answer + ' .ans-letter').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/ph%C6%B0%C6%A1ng%20%C3%A1n%20%C4%91%C3%BAng.png?v=1738772826517');
    $('#answer-' + answer + ' .ans-text').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng.png?v=1738772947460');    
  }
  else if(status == 3) {
    $('#answer-' + answer + ' .ans-letter').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/ph%C6%B0%C6%A1ng%20%C3%A1n%20sai.png?v=1738772825514');
    $('#answer-' + answer + ' .ans-text').css('background-image', 'https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/%C4%91%C3%A1p%20%C3%A1n%20sai.png?v=1738772947786');    
  }
  
}

AnswerStatus (2,2);