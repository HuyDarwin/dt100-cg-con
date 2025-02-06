$.keyframe.define([
  {
    name: 'key-q-reveal',
    '0%': {
      "opacity": "1",
      "transform": "translateY(100%)"
    },
    '100%': {
      "opacity": "1",
       "transform": "translateY(0%)"
    }
  },
  {
    name: 'key-q-hide',
    '0%': {
      "opacity": "1",
      "transform": "translateY(0%)"
    },
    '100%': {
      "opacity": "1",
       "transform": "translateY(100%)"
    }
  },
  {
    name: 'key-q-reveal-2',
    '0%': {
      "opacity": "1",
      "clip-path": "inset(0% 0% 50% 0%)"
    },
    '100%': {
      "opacity": "1",
       "clip-path": "inset(0% 0% 0% 0%)"
    }
  },
  {
    name: 'key-q-reveal-3',
    '0%': {
      "opacity": "1",
      "clip-path": "inset(0% 0% 100% 0%)"
    },
    '100%': {
      "opacity": "1",
       "clip-path": "inset(0% 0% 0% 0%)"
    }
  },
  {
    name: 'key-q-reveal-4',
    '0%': {
      "opacity": "1",
      "clip-path": "inset(100% 0% 0% 0%)"
    },
    '100%': {
      "opacity": "1",
       "clip-path": "inset(0% 0% 0% 0%)"
    }
  }
]);

function ResetQuestion(){
  $('.q-con div, .q-con, .answer').css('opacity',0);
}

function QuestionReveal() {
    $('.question').playKeyframe({
      name: 'key-q-reveal',
      duration: '0.75s',
      timingFunction: 'ease'
    })
    $('.q-con').playKeyframe({
      name: 'key-q-reveal-2',
      duration: '0.75s',
      timingFunction: 'ease'
    })
}

function RemainReveal() {
    $('.q-remain').playKeyframe({
      name: 'key-q-reveal',
      duration: '0.75s',
      timingFunction: 'ease'
    })
}

function RemainHide() {
    $('.q-remain').playKeyframe({
      name: 'key-q-hide',
      duration: '0.25s',
      timingFunction: 'linear'
    })
}

function MoneyReveal() {
    $('.q-money').playKeyframe({
      name: 'key-q-reveal',
      duration: '0.25s',
      timingFunction: 'linear'
    })
}

function EscapeReveal(){
    $('.q-escape-p').css('opacity',0)
  
    setTimeout(function(){
      $('#q-escape-p-25').css('opacity',1)
    }, 100)
    setTimeout(function(){
      $('#q-escape-p-50').css('opacity',1)
    }, 200)
    setTimeout(function(){
      $('#q-escape-p-75').css('opacity',1)
    }, 300)
  
    $('.q-escape').playKeyframe({
      name: 'key-q-reveal',
      duration: '0.25s',
      timingFunction: 'linear'
    })
}

function EscapeHide(){  
    setTimeout(function(){
      $('#q-escape-p-75').css('opacity',0)
    }, 0)
    setTimeout(function(){
      $('#q-escape-p-50').css('opacity',0)
    }, 100)
    setTimeout(function(){
      $('#q-escape-p-25').css('opacity',0)
    }, 200)
  
    $('.q-escape').playKeyframe({
      name: 'key-q-hide',
      duration: '0.25s',
      timingFunction: 'linear'
    })
}

function AnswerReveal (ans) {
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
  
  $('#answer-' + answer).css('opacity',1)
  $('#answer-' + answer + ' div').css('opacity',1)
  
  $('#answer-' + answer + ' .ans-letter').playKeyframe({
      name: 'key-q-reveal-4',
      duration: '0.25s',
      timingFunction: 'ease'
  })  
  
  $('#answer-' + answer + ' .ans-text').playKeyframe({
      name: 'key-q-reveal-3',
      duration: '0.25s',
      timingFunction: 'ease'
  }) 
}

ResetQuestion()
QuestionReveal()
setTimeout(function(){
  AnswerReveal(1)
}, 2000)
setTimeout(function(){
  AnswerReveal(2)
}, 4000)
setTimeout(function(){
  AnswerReveal(3)
}, 6000)
setTimeout(function(){
  RemainReveal()
}, 8000)
setTimeout(function(){
  RemainHide()
}, 11000)
setTimeout(function(){
  EscapeReveal()
}, 11250)
setTimeout(function(){
  MoneyReveal()
}, 11500)
setTimeout(function(){
  EscapeHide()
}, 13000)

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