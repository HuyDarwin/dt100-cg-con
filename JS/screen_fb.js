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
              "transform": "scale(1)"
            },
            '100%': {
              "opacity": "0",
              "transform": "scale(0)"
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
          },
          {
            name: 'opacity-0',
            '100%': {
              "opacity": "0"
            } 
          },
          {
            name: 'opacity-1',
            '100%': {
              "opacity": "1"
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


        function ResetQuestion(){
          $(".answer div").playKeyframe({
              name: 'opacity-0',
              duration: '0s',
              timingFunction: 'ease'
            })
          $('.q-image, .q-escape, .q-con div, .q-con, .q-remain, .q-money').css('opacity',0).playKeyframe('reset');
          $(".answer").playKeyframe('reset');
          $('.q-a-con').css({'transform':'scaleY(1) scaleX(1) translateY(0%)'});
          AnswerStatus(1,0);
          AnswerStatus(2,0);
          AnswerStatus(3,0);
        }

        function QuestionReveal(show) {
            if(show == true){
              $('.q-escape').css('opacity',1)
            }
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
            $('.num-e-yellow').css('opacity',1);    
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
        RevealLogo();

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }
          
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
            $(".question-p td").html(data.question.toString().toUpperCase());
            $("#answer-a .ans-text-p td").html(data.answer_a.toString().toUpperCase());
            $("#answer-b .ans-text-p td").html(data.answer_b.toString().toUpperCase());
            $("#answer-c .ans-text-p td").html(data.answer_c.toString().toUpperCase());
            $(".number-eliminated-p").html(data.mob_eli);
          
            $(".q-image").css("background-image", "url('" + data.option_a_img + "')");
          
            $(".q-remain-p").html("1 ĐẤU " + data.mob_left);
            $(".q-money-p").html(accounting.formatMoney(data.total_money));
          
            if(data.c_reveal == 1) {
              ResetLogo();
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
                  ImageReveal();
                }
                var boolean = false;
                if (data.mob_left < 100) {
                  boolean = true;
                }
                QuestionReveal(boolean);
              }, 500);
              upd("q_reveal", 0);
            }
            if(data.mob_answer == 1) {
              RemainReveal();
              upd("mob_answer", 0);
            }
            if(data.q_m_e_reveal == 1) {
              RemainHide();
              if(data.mob_left < 100) {
                setTimeout(function(){
                  MoneyReveal();
                }, 500);                     
              }
              upd("q_m_e_reveal", 0);
            }
          
            if(data.escape_25 == true) {
              EscapeStatus(25,1);
            }
            else{
              EscapeStatus(25,0);
            }
            if(data.escape_50 == true) {
              EscapeStatus(50,1);
            }
            else{
              EscapeStatus(50,0);
            }
            if(data.escape_75 == true) {
              EscapeStatus(75,1);
            }
            else{
              EscapeStatus(75,0);
            }
          
            if(data.a_reveal_1 == 1) {
              AnswerReveal(1);
              upd("a_reveal_1", 0);
            }
            if(data.a_reveal_2 == 1) {
              AnswerReveal(2);
              upd("a_reveal_2", 0);
            }
            if(data.a_reveal_3 == 1) {
              AnswerReveal(3);
              upd("a_reveal_3", 0);
            }
            if(data.a_choose_1 == 1) {
              AnswerStatus(1,1);
              upd("a_choose_1", 0);
            }
            if(data.a_choose_2 == 1) {
              AnswerStatus(2,1);
              upd("a_choose_2", 0);
            }
            if(data.a_choose_3 == 1) {
              AnswerStatus(3,1);
              upd("a_choose_3", 0);
            }
            if(data.a_right_1 == 1) {
              AnswerStatus(1,2);
              upd("a_right_1", 0);
            }
            if(data.a_right_2 == 1) {
              AnswerStatus(2,2);
              upd("a_right_2", 0);
            }
            if(data.a_right_3 == 1) {
              AnswerStatus(3,2);
              upd("a_right_3", 0);
            }
            if(data.a_wrong_1 == 1) {
              AnswerStatus(1,3);
              upd("a_wrong_1", 0);
            }
            if(data.a_wrong_2 == 1) {
              AnswerStatus(2,3);
              upd("a_wrong_2", 0);
            }
            if(data.a_wrong_3 == 1) {
              AnswerStatus(3,3);
              upd("a_wrong_3", 0);
            }
            if(data.q_hide == 1) {
              ResetQuestion();
              RevealNumEle();
              upd("q_hide", 0);
            }  
            if(data.hide_eliminate == 1) {
              ResetNumEle();
              RevealLogo();
              upd("hide_eliminate", 0);
            }
            if(data.mob_eli_mode == 1) {
              ShowWhichNumEle(2);              
              upd("mob_eli_mode", 0);
            }
            if(data.mob_eli_mode == 2) {
              ShowWhichNumEle(3);              
              upd("mob_eli_mode", 0);
            }
        });
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});