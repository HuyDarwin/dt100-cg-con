$.keyframe.define([
  {
    name: 'key-q-reveal',
    '0%': {
      "transform": "translateY(100%)"
    },
    '100%': {
       "transform": "translateY(0%)"
    }
  },
  {
    name: 'key-q-reveal-2',
    '0%': {
      "clip-path": "inset(0% 0% 50% 0%)"
    },
    '100%': {
       "clip-path": "inset(0% 0% 0% 0%)"
    }
  }
]);

function ResetQuestion(){
  
}

function QuestionReveal() {
    $('.question').playKeyframe({
      name: 'key-q-reveal',
      duration: '0.75s',
      timingFunction: 'ease'
    })
    $('.question').playKeyframe({
      name: 'key-q-reveal-2',
      duration: '0.75s',
      timingFunction: 'ease'
    })
}

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

function EscapeStatus (mode, status) {
  if (status == 0) {
    $('#q-escape-p-' + mode).css('opacity', 0.25);
  }
  else if (status == 1) {
    $('#q-escape-p-' + mode).css('opacity', 1);    
  }
}