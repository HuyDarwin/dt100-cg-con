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

        //
      
        con.PlayWhiteNoise();

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }     
          
            if(data.play_q_music_1 == 1) {
              con.PlaySound(data.option_a_music,2);
              upd("play_q_music_1", 0);
            }
            if(data.play_q_music_2 == 1) {
              con.PlaySound(data.option_b_music,2);
              upd("play_q_music_2", 0);
            }     
            
            if(data.c_reveal == 1) {
              con.StopSound(4);
              con.StopSound(5);
              con.PlaySound("Assets/los_eindje_nadenken.mp3", 2);
              setTimeout(function(){
                con.PlaySound("Assets/b_01_vraag_spanning.mp3", 4);                
              }, 500);
              upd("c_reveal", 0);
            }     
            if(data.choose_option == 1 || data.choose_option == 2) {
              con.PlaySound("Assets/categorie_a.mp3", 2);
              upd("choose_option", 0);
            }    
            if(data.q_reveal == 1) {
              con.PlaySound("Assets/answer_a_apperas.mp3", 2);
              upd("q_reveal", 0);
            }     
            if(data.a_reveal_1 == 1) {
              con.PlaySound("Assets/reveal%20answer.mp3",2);
              upd("a_reveal_1", 0);
            }
            if(data.a_reveal_2 == 1) {
              con.PlaySound("Assets/reveal%20answer.mp3",2);
              upd("a_reveal_2", 0);
            }
            if(data.a_reveal_3 == 1) {
              con.PlaySound("Assets/reveal%20answer.mp3",2);
              upd("a_reveal_3", 0);
            }
            if(data.m_e_t_sfx == 1) {
              con.PlaySound("Assets/Money%20and%20Escapes%20Reveal.mp3",2);
              upd("m_e_t_sfx", 0);
            }
            if(data.mob_answer == 1) {
              con.StopSound(4);
              con.PlaySound("Assets/6%20giay.mp3",2);
              setTimeout(function(){
                con.PlaySound("Assets/spanning_nadenken.mp3",5,7);  
              }, 7000);
              upd("mob_answer", 0);
            }
            if(data.escape_use == 1) {
              con.PlaySound("Assets/geld_er_af_na_escape%20SAT%20GOC.mp3",2);
              upd("escape_use", 0);
            }
            if(data.lock_ans_sfx == 1) {
              con.StopSound(5);
              con.PlaySound("Assets/button_c_heavy.mp3",2);
              setTimeout(function(){
                con.PlaySound("Assets/spanning_na_keuze_gemaakt.mp3",4);                
              }, 500);
              upd("lock_ans_sfx", 0);
            }
            if(data.right_ans_sfx == 1) {
              setTimeout(function(){ 
                con.StopSound(4,1);
              }, 500);
              con.PlaySound("Assets/Dung.mp3",2);
              setTimeout(function(){ 
                con.ResumeSound(4);
              }, 2500);
              upd("right_ans_sfx", 0);
            }
            if(data.wrong_ans_sfx == 1) {
              if(data.escape_used == true){
                setTimeout(function(){ 
                  con.StopSound(4,1);
                }, 500);
                setTimeout(function(){ 
                  con.ResumeSound(4);
                }, 2000);
              }
              else{
                setTimeout(function(){ 
                  con.StopSound(4);
                }, 500);
              }
              con.PlaySound("Assets/Sai%20sai.mp3",2);
              upd("wrong_ans_sfx", 0);
            }
            if(data.goodbye == 1) {
              con.PlaySound("Assets/Tam%20biet%20(sạch%20hơn).mp3",2);
              upd("goodbye", 0);
            }
            if(data.e_reveal == 1) {
              con.PlaySound("Assets/sound_09_soft_reveal.mp3",2);
              upd("e_reveal", 0);
            }
            if(data.no_mob_sfx == 1) {
              con.PlaySound("Assets/totaal_bedrag_draai.mp3",2);
              upd("no_mob_sfx", 0);
            }
            if(data.eli_mob_sfx == 1) {
              con.PlaySound("Assets/Mob%20Eliminated.mp3",2);
              upd("eli_mob_sfx", 0);
            }
            if(data.deposit_sfx == 1) {
              con.PlaySound("Assets/utomp3.com%20-%20MONEY%20SOUND%20EFFECT%20.mp3",2);
              upd("deposit_sfx", 0);
            }
            if(data.win_sfx == 1) {
              con.StopSound(4);
              con.PlaySound("Assets/Intro%20%2B%20Win.mp3",1);      
              upd("win_sfx", 0);
            }
          
            if(data.welcome_bed == 1) {
              con.PlaySound("Assets/Nhac%20nen.mp3",5);
              upd("welcome_bed", 0);
            }
            if(data.intro == 1) {
              con.StopSound(5);
              con.PlaySound("Assets/Intro%20%2B%20Win.mp3",1);
              upd("intro", 0);
            }
            if(data.new_player == 1) {
              con.PlaySound("Assets/Sau%20QC%20%2B%20Nguoi%20choi%20moi.mp3",1);
              upd("new_player", 0);
            }
            if(data.comm_in == 1) {
              con.StopSound(4,1);
              con.StopSound(5,1);
              con.PlaySound("Assets/Vao%20Quang%20Cao.mp3",1);
              upd("comm_in", 0);
            }
            if(data.comm_out == 1) {
              con.PlaySound("Assets/Sau%20QC%20%2B%20Nguoi%20choi%20moi.mp3",1);
              upd("comm_out", 0);
            }
            if(data.theme == 1) {
              con.PlaySound("Assets/theme%20(co%20tap%20am%20da%20loc%20nhung%20khong%20kha%20hon%20may).mp3",5);
              upd("theme", 0);
            }
            if(data.restyle_1 == 1) {
              con.PlaySound("Assets/1_tegen_100_restyle_2019_01.mp3",1);
              upd("restyle_1", 0);
            }
            if(data.restyle_5 == 1) {
              con.PlaySound("Assets/1_tegen_100_restyle_2019_05.mp3",3);
              upd("restyle_5", 0);
            }
            if(data.restyle_8 == 1) {
              con.StopSound(3);
              con.StopSound(5);
              con.PlaySound("Assets/Chon%20NC%20moi.mp3",5);
              upd("restyle_8", 0);
            }
          
            if(data.custom_1 == 1) {
              con.PlaySound("Assets/download.mp3", 1);
              upd("custom_1", 0);
            }     
            if(data.custom_2 == 1) {
              con.PlaySound("Assets/02.mp3", 1);
              upd("custom_2", 0);
            }     
            if(data.custom_3 == 1) {
              con.PlaySound("Assets/03.mp3", 1);
              upd("custom_3", 0);
            }     
            if(data.custom_4 == 1) {
              con.PlaySound("Assets/04.mp3", 1);
              upd("custom_4", 0);
            }     
            if(data.custom_5 == 1) {
              con.PlaySound("Assets/05.mp3", 1);
              upd("custom_5", 0);
            }     
            if(data.custom_6 == 1) {
              con.PlaySound("Assets/06.mp3", 1);
              upd("custom_6", 0);
            }     
            if(data.custom_7 == 1) {
              con.PlaySound("Assets/07.mp3", 1);
              upd("custom_7", 0);
            }     
            if(data.custom_8 == 1) {
              con.PlaySound("Assets/08.mp3", 1);
              upd("custom_8", 0);
            }     
            if(data.custom_9 == 1) {
              con.PlaySound("Assets/09.mp3", 1);
              upd("custom_9", 0);
            }          
          
            if(data.pause_bed == 1) {
              con.StopSound(3,1);
              con.StopSound(4,1);
              con.StopSound(5,1);
              upd("pause_bed", 0);
            }
            if(data.resume_bed == 1) {
              con.ResumeSound(3);
              con.ResumeSound(4);
              con.ResumeSound(5);
              upd("resume_bed", 0);
            }
            if(data.stop_sounds == 1) {
              con.StopSound();
              upd("stop_sounds", 0);
            }
        });
        
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});
