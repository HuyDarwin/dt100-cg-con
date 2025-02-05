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
   
  $('#answer-' + answer + ' .ans-letter .ans-letter-main').css('opacity',0)
  $('#answer-' + answer + ' .ans-text .ans-text-main').css('opacity',0)   
  $('#answer-' + answer + ' .ans-letter .ans-letter-lock').css('opacity',0)
  $('#answer-' + answer + ' .ans-text .ans-text-lock').css('opacity',0)   
  $('#answer-' + answer + ' .ans-letter .ans-letter-correct').css('opacity',0)
  $('#answer-' + answer + ' .ans-text .ans-text-correct').css('opacity',0)   
  $('#answer-' + answer + ' .ans-letter .ans-letter-wrong').css('opacity',0)
  $('#answer-' + answer + ' .ans-text .ans-text-wrong').css('opacity',0)
  
  if(status == 0) {
    $('#answer-' + answer + ' .ans-letter .ans-letter-main').css('opacity',1)
    $('#answer-' + answer + ' .ans-text .ans-text-main').css('opacity',1)
  }
  else if(status == 1) {
    $('#answer-' + answer + ' .ans-letter .ans-letter-lock').css('opacity',1)
    $('#answer-' + answer + ' .ans-text .ans-text-lock').css('opacity',1)
  }
  else if(status == 2) {
    $('#answer-' + answer + ' .ans-letter .ans-letter-correct').css('opacity',1)
    $('#answer-' + answer + ' .ans-text .ans-text-correct').css('opacity',1) 
  }
  else if(status == 3) {
    $('#answer-' + answer + ' .ans-letter .ans-letter-wrong').css('opacity',1)
    $('#answer-' + answer + ' .ans-text .ans-text-wrong').css('opacity',1)
  }
  
}

AnswerStatus (2,1);

setTimeout(function(){
  AnswerStatus(2,3);
  AnswerStatus(3,2);
}, 1000)