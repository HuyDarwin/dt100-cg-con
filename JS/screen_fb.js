import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();

        // Variables

        //
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
            name: 'n-reveal',
            '0%': {
              "opacity": "1",
              "transform": "translateY(150%)"
            },
            '100%': {
              "opacity": "1",
               "transform": "translateY(0%)"
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
          $('.q-image, .q-escape, .q-con div, .q-con, .answer').css('opacity',0).playKeyframe('reset');
          $('.q-a-con').css({'transform':'scaleY(1) scaleX(1) translateY(0%)'});
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
          $('.q-a-con').css({'transform':'scaleY(0.6) scaleX(0.75) translateY(37.5%)'});
        }

        /* n-hold */

        function ResetNumEle(){
          $('.number-eliminated').css('opacity',0).playKeyframe('reset');
        }

        function ShowWhichNumEle(num){
          $('.num-e-main, .num-e-red, .num-e-yellow').css('opacity',0);
          if(num==1){
            $('.num-e-main').css('opacity',1);    
          }
          else if(num==2){
            $('.num-e-red').css('opacity',1);    
          }
          else if(num==3){
            $('.num-e-red').css('opacity',1);    
          }
        }

        function RevealNumEle(){
          ShowWhichNumEle(1);
          $('.number-eliminated').playKeyframe({
            name: 'n-reveal',
            duration: '0.75s',
            timingFunction: 'ease'
          })
        }

        /* l - hold */
        function ResetLogo(){
          $('.logo').css('opacity',0).playKeyframe('reset');
        }

        function RevealLogo(){
          $('.logo').playKeyframe({
            name: 'n-reveal',
            duration: '0.75s',
            timingFunction: 'ease'
          }) 
        }

        /* all */
        function ResetAll(){
          ResetAllTypes();
          ResetQuestion();
          ResetNumEle();  
          ResetLogo();
        }

        // 

        /* Init */
        ResetAll();

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            $("#type-1 .category-p td").html(data.option_a_name.toUpperCase());
            $("#type-2 .image").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-2 .category-p td").html(data.option_a_name.toUpperCase());
            $("#type-3 #category-p-a td").html(data.option_a_name.toUpperCase());
            $("#type-3 #category-p-b td").html(data.option_b_name.toUpperCase());
            $("#type-4 #category-p-a td").html(data.option_a_name.toUpperCase());
            $("#type-4 .image").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-4 #category-p-b td").html(data.option_b_name.toUpperCase());
            $("#type-5 #category-image-a").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-5 #category-image-b").css("background-image", "url('" + data.option_b_img + "')");
            $("#type-6 #category-image-a").css("background-image", "url('" + data.option_a_img + "')");
            $("#type-6 #category-image-b").css("background-image", "url('" + data.option_b_img + "')");
            $("#type-6 #category-text-p-a td").html(data.option_a_name.toUpperCase());
            $("#type-6 #category-text-p-b td").html(data.option_b_name.toUpperCase());

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }
          
            if(data.c_reveal == 1) {
              RevealType (data.q_type);
              upd("c_reveal", 0);
            }
        });
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});