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
  }
]);

function ResetAllTypes(){
  $('.type').css('top','100%');
  
  $('#type-1 .easy-hard').playKeyframe('reset')
  $('#type-2 .easy-hard').playKeyframe('reset')
  $('#type-3 .').playKeyframe('reset')
}

function RevealType (type) {
  $('.type').css('top','100%');
  $('#type-' + type).animate({"top":"0%"}, 500);
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
        name: 'move-right',
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
        name: 'move-left',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
  else if(type==2){
    if(opt==1){
      $('#type-2 #hard').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-2 #easy').playKeyframe({
        name: 'move-right',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
    else if(opt==2){
      $('#type-2 #easy').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-2 #hard').playKeyframe({
        name: 'move-left',
        duration: '0.25s',
        timingFunction: 'ease'
      })      
    }
  }
}

/* Init */

/*
ResetAllTypes();
$('#type-3').css('top','0%');
*/

/*
ResetAllTypes();
setTimeout(function(){
  RevealType(2)
}, 500)
setTimeout(function(){
  ChooseOption(2,1)
}, 2000)

setTimeout(function(){
  ResetAllTypes();
}, 3500)
setTimeout(function(){
  RevealType(2)
}, 4500)
setTimeout(function(){
  ChooseOption(2,2)
}, 6000)
*/

/*
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
*/