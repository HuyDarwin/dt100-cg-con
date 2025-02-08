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

/* Init */


