import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();

        // Variables

        //
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
      
        function upd(key, val) {
            update(ref(db), {
                [key]: val
            })
        }

        function enb(key) {
            $(key).removeAttr('disabled')
        }

        function dib(key) {
            $(key).attr('disabled', true);
        }

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
      
        function ResetAll(){
          ResetAllTypes();
          $(".q-image").css("opacity",0);
        }

        /* Init */
        ResetAll();

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            $("#type-1 .category-p td").html(data.option_a_name.toString().toUpperCase());
            $("#type-2 .image").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-2 .category-p td").html(data.option_a_name.toString().toUpperCase());
            $("#type-3 #category-p-a td").html(data.option_a_name.toString().toUpperCase());
            $("#type-3 #category-p-b td").html(data.option_b_name.toString().toUpperCase());
            $("#type-4 #category-p-a td").html(data.option_a_name.toString().toUpperCase());
            $("#type-4 .image").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-4 #category-p-b td").html(data.option_b_name.toString().toUpperCase());
            $("#type-5 #category-image-a").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-5 #category-image-b").css("background-image", "url('" + data.option_b_img + "')");
            $("#type-6 #category-image-a").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-6 #category-image-b").css("background-image", "url('" + data.option_b_img + "')");
            $("#type-6 #category-text-p-a td").html(data.option_a_name.toString().toUpperCase());
            $("#type-6 #category-text-p-b td").html(data.option_b_name.toString().toUpperCase());
          
            $(".q-image").css("background-image", "url('" + data.option_a_img + "')");


            if(data.c_reveal == 1) {
              RevealType (data.q_type);
              upd("c_reveal", 0);
            }
            if(data.choose_option == 1) {
              ChooseOption (data.q_type, 1);
              upd("choose_option", 0);
            }
            if(data.choose_option == 2) {
              ChooseOption (data.q_type, 2);
              upd("choose_option", 0);
            }
            if(data.q_reveal == 1) {
              ResetAllTypes();
              setTimeout(function(){
                if(data.q_type == 2 || data.q_type == 4) {
                  $(".q-image").css("opacity",1);
                }
              }, 500);
              upd("q_reveal", 0);
            }
            if(data.q_hide == 1) {
              if(data.q_type == 2 || data.q_type == 4) {
                $(".q-image").css("opacity",0);
              }              
              upd("q_hide", 0);
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});