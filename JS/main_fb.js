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
          }
        ]);

        function ResetQuestion(){
          $('.q-con div, .q-con, .answer').css('opacity',0).playKeyframe('reset');
          AnswerStatus(1,0);
          AnswerStatus(2,0);
          AnswerStatus(3,0);
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

        function EscapeReveal(a,b,c){
            $('.q-escape-p').css('opacity',0)

            if(a == true) {
              setTimeout(function(){
                $('#q-escape-p-25').css('opacity',1)
              }, 100)              
            }
            else{
              setTimeout(function(){
                $('#q-escape-p-25').css('opacity',0.25)
              }, 100)                
            }

            if(b == true) {
              setTimeout(function(){
                $('#q-escape-p-50').css('opacity',1)
              }, 200)              
            }
            else{
              setTimeout(function(){
                $('#q-escape-p-50').css('opacity',0.25)
              }, 200)                
            }

            if(c == true) {
              setTimeout(function(){
                $('#q-escape-p-75').css('opacity',1)
              }, 300)              
            }
            else{
              setTimeout(function(){
                $('#q-escape-p-75').css('opacity',0.25)
              }, 300)                
            }

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

        function HideQuestionAndAnswer(){
          $('.q-con').playKeyframe({
              name: 'key-q-hide-3',
              duration: '0.75s',
              timingFunction: 'ease'
          })  
          $('.answer').playKeyframe({
              name: 'key-q-hide-4',
              duration: '0.25s',
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

        function ResetMoneyGpx(){
          $('.eliminate-money, .total-money').css('opacity',0);
        }

        function RevealEliminateGpx(){
          $('.eliminate-money').playKeyframe({
              name: 'key-q-reveal-5',
              duration: '0.75s',
              timingFunction: 'ease'
          })  
        }

        function EliminateToTotalGpx(){
          $('.total-money').playKeyframe({
              name: 'key-q-reveal-5',
              duration: '0.375s',
              timingFunction: 'ease'
          })  
          $('.eliminate-money').playKeyframe({
              name: 'eliminate-to-total',
              duration: '0.75s',
              timingFunction: 'ease'
          })  
        }

        function RevealTotalGpx(){
          $('.total-money').playKeyframe({
              name: 'key-q-reveal-5',
              duration: '0.75s',
              timingFunction: 'ease'
          })  
        }

        function HideEliminateGpx(){
          $('.eliminate-money').playKeyframe({
              name: 'key-q-hide-4',
              duration: '0.25s',
              timingFunction: 'ease'
          })  
        }

        function HideTotalGpx(){
          $('.total-money').playKeyframe({
              name: 'key-q-hide-4',
              duration: '0.25s',
              timingFunction: 'ease'
          })  
        }
      
        function ResetAll(){
          ResetMoneyGpx();
          ResetQuestion();        
        }

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }
          
            $(".question-p td").html(data.question.toString().toUpperCase());
            $("#answer-a .ans-text-p td").html(data.answer_a.toString().toUpperCase());
            $("#answer-b .ans-text-p td").html(data.answer_b.toString().toUpperCase());
            $("#answer-c .ans-text-p td").html(data.answer_c.toString().toUpperCase());
          
            $(".q-remain-p").html("1 ĐẤU " + data.mob_left);
            $(".q-money-p").html(accounting.formatMoney(data.total_money));
            $(".eliminate-money-p").html(accounting.formatMoney(data.eli_money));
            $(".total-money-p").html(accounting.formatMoney(data.total_money));
          
            if(data.q_reveal == 1) {
              setTimeout(function(){
                QuestionReveal();
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
                  EscapeReveal(data.escape_25, data.escape_50, data.escape_75);
                }, 250);         
                setTimeout(function(){
                  MoneyReveal();
                }, 500);                     
              }
              upd("q_m_e_reveal", 0);
            }
            if(data.escape_use == 1) {
              setTimeout(function(){
                EscapeHide();
              }, 1500);              
              upd("escape_use", 0);
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
              HideQuestionAndAnswer();
              setTimeout(function(){
                ResetQuestion();
              }, 1000);
              upd("q_hide", 0);
            }  
          
            if(data.e_reveal == 1) {
              RevealEliminateGpx();
              upd("e_reveal", 0);
            }
            if(data.e_hide == 1) {
              HideEliminateGpx();
              upd("e_hide", 0);
            }
            if(data.t_reveal == 1) {
              RevealTotalGpx();
              upd("t_reveal", 0);
            }
            if(data.e_to_t_reveal == 1) {
              EliminateToTotalGpx();
              upd("e_to_t_reveal", 0);
            }
            if(data.t_hide == 1) {
              HideTotalGpx();
              upd("t_hide", 0);
            }          


        });

        /* Init */
        ResetAll();

    }(window.CONTROLLER = window.CONTROLLER || {}));
});