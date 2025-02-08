$.keyframe.define([
  {
    name: 'reset'
  },
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
    name: 'key-q-hide-3',
    '0%': {
      "opacity": "1",
      "transform": "translateY(0)",
      "clip-path": "inset(0% 0% 0% 0%)"
    },
    '100%': {
      "opacity": "1",
      "transform": "translateY(100px)",
      "clip-path": "inset(0% 0% 100% 0%)"
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
  },
  {
    name: 'key-q-hide-4',
    '0%': {
      "opacity": "1",
      "clip-path": "inset(0% 0% 0% 0%)"
    },
    '100%': {
      "opacity": "1",
      "clip-path": "inset(0% 0% 100% 0%)"
    }
  },
  {
    name: 'key-q-reveal-5',
    '0%': {
      "opacity": "1",
      "transform": "translateY(100%)",
      "clip-path": "inset(0% 0% 100% 0%)"
    },
    '100%': {
      "opacity": "1",
      "transform": "translateY(0)",
      "clip-path": "inset(0% 0% 0% 0%)"
    }
  },
  {
    name: 'eliminate-to-total',
    '0%': {
      "opacity": "1",
      "transform": "translateY(0)",
      "clip-path": "inset(0% 0% 0% 0%)"
    },
    '50%': {
      "opacity": "1",
      "transform": "translateY(-100%)",
      "clip-path": "inset(0% 0% 0% 0%)"
    },
    '100%': {
      "opacity": "1",
      "transform": "translateY(0%)",
      "clip-path": "inset(0% 0% 100% 0%)"
    }    
  },
  {
    name: 'hide',
    '0%': {
      "opacity": "1",
      "scale": "1"
    },
    '100%': {
      "opacity": "0",
      "scale": "0"
    }
  },
  {
    name: 'move-right',
    '100%': {
      "opacity": "1",
      "transform": "translateX(50%)"
    }
  },
  {
    name: 'move-left',
    '100%': {
      "opacity": "1",
      "transform": "translateX(-50%)"
    }
  },
  {
    name: 'move-down',
    '100%': {
      "opacity": "1",
      "transform": "translateY(50%)"
    }
  },
  {
    name: 'move-up',
    '100%': {
      "opacity": "1",
      "transform": "translateY(-50%)"
    }
  },
  {
    name: 'zoom-ch',
    '100%': {
      "opacity": "1",
      "scale":"0.5",
      "transform": "translateY(-50%)"
    }
  }
]);

function ResetAllTypes(){
  $('.type').css('top','100%');
  
  $('#type-1 .easy-hard').playKeyframe('reset')
  $('#type-2 .easy-hard').playKeyframe('reset')
  $('#type-3 .category').playKeyframe('reset')
  $('#type-4 .category').playKeyframe('reset')
  $('#type-5 .category').playKeyframe('reset')
  $('#type-6 .category').playKeyframe('reset')
}

function RevealType (type) {
  $('.type').css('top','100%');
  $('#type-' + type).animate({"top":"0%"}, 500);
}

function ChooseOption (type, opt){
  if(type==1 || type == 2){
    if(opt==1){
      $('#type-' + type + ' #hard').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #easy').playKeyframe({
        name: 'move-right',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
    else if(opt==2){
      $('#type-' + type + ' #easy').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #hard').playKeyframe({
        name: 'move-left',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
  else if(type==3 || type==4){
    if(opt==1){
      $('#type-' + type + ' #category-b').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #category-a').playKeyframe({
        name: 'move-down',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
    else if(opt==2){
      $('#type-' + type + ' #category-a').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #category-b').playKeyframe({
        name: 'move-up',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
  else if(type==5 || type==6){
    if(opt==1){
      $('#type-' + type + ' #category-b').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #category-a').playKeyframe({
        name: 'move-right',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
    else if(opt==2){
      $('#type-' + type + ' #category-a').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-' + type + ' #category-b').playKeyframe({
        name: 'move-left',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
}

/* q-hold */

function ResetQuestion(){
  $('.q-escape, .q-con div, .q-con, .answer').css('opacity',0).playKeyframe('reset');
}

function QuestionReveal() {
    $('.q-escape').css('opacity',1)
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

function QuestionHide(){
  ResetQuestion();
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

function ImageReveal() {
  $('.q-image').css('opacity',1);
  $('#q-hold').playKeyframe('zoom-ch')
}

/* Init */


ResetAllTypes();
ResetQuestion();
ImageReveal();
QuestionReveal();