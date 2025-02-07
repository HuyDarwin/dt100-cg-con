$.keyframe.define([
  {
    name: 'reset'
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
    name: 'move-horizontally',
    '100%': {
      "opacity": "1",
      "left": "25%"
    }
  }
]);

function ResetAllTypes(){
  $('.type').css('top','100%');
  
  $('#type-1 #easy').playKeyframe('reset')
  $('#type-1 #hard').playKeyframe('reset')
}

function RevealType (type) {
  $('.type').css('top','100%');
  if(type==1){
    $('#type-1').animate({"top":"0%"}, 500);
  }
  else if(type==2){
    $('#type-2').animate({"top":"0%"}, 500);
  }
}

function ChooseOption (type, opt){
  if(type==1){
    if(opt==1){
      $('#type-1 #hard').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-1 #easy').playKeyframe({
        name: 'move-horizontally',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
    else if(opt==2){
      $('#type-1 #easy').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-1 #hard').playKeyframe({
        name: 'move-horizontally',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
}

/* Init */
ResetAllTypes();
setTimeout(function(){
  RevealType(1)
}, 500)
setTimeout(function(){
  ChooseOption(1,1)
}, 2000)

setTimeout(function(){
  ResetAllTypes();
}, 3500)
setTimeout(function(){
  RevealType(1)
}, 4500)
setTimeout(function(){
  ChooseOption(1,2)
}, 6000)