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

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            if(data.c_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/los_eindje_nadenken.mp3?v=1739630120173",2);
              upd("c_reveal", 0);
            }     
            if(data.choose_option == 1 || data.choose_option == 2) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/categorie_a.mp3?v=1739630508667",2);
              upd("choose_option", 0);
            }    
            if(data.q_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/answer_a_apperas.mp3?v=1739630539190",2);
              upd("q_reveal", 0);
            }     
            if(data.a_reveal_1 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/reveal%20answer.mp3?v=1739630572444",2);
              upd("a_reveal_1", 0);
            }
            if(data.a_reveal_2 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/reveal%20answer.mp3?v=1739630572444",2);
              upd("a_reveal_2", 0);
            }
            if(data.a_reveal_3 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/reveal%20answer.mp3?v=1739630572444",2);
              upd("a_reveal_3", 0);
            }
            if(data.m_e_t_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Money%20and%20Escapes%20Reveal.mp3?v=1739678309755",2);
              upd("m_e_t_sfx", 0);
            }
            if(data.mob_answer == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/denk_tijd_06_sec_full.mp3?v=1739630706495",2);
              upd("mob_answer", 0);
            }
            if(data.escape_use == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/geld_er_af_na_escape%20SAT%20GOC.mp3?v=1739631377667",2);
              upd("escape_use", 0);
            }
            if(data.lock_ans_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/button_c_heavy.mp3?v=1739631381206",2);
              upd("lock_ans_sfx", 0);
            }
            if(data.right_ans_sfx == 1) {
              setTimeout(function(){ 
                con.StopSound(4,1);
              }, 500);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_12.mp3?v=1739678749617",2);
              setTimeout(function(){ 
                con.ResumeSound(4);
              }, 3500);
              upd("right_ans_sfx", 0);
            }
            if(data.wrong_ans_sfx == 1) {
              if(data.escape_used == true){
                setTimeout(function(){ 
                  con.StopSound(4,1);
                }, 500);
                setTimeout(function(){ 
                  con.ResumeSound(4);
                }, 3500);
              }
              else{
                setTimeout(function(){ 
                  con.StopSound(4);
                }, 500);
              }
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_09.mp3?v=1739678743256",2);
              upd("wrong_ans_sfx", 0);
            }
            if(data.goodbye == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_13.mp3?v=1739681218629",2);
              upd("goodbye", 0);
            }
            if(data.e_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/sound_09_soft_reveal.mp3?v=1739679621402",2);
              upd("e_reveal", 0);
            }
            if(data.t_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Money%20and%20Escapes%20Reveal.mp3?v=1739678309755",2);
              upd("t_reveal", 0);
            }
            if(data.no_mob_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/totaal_bedrag_draai.mp3?v=1739696137462",2);
              upd("no_mob_sfx", 0);
            }
            if(data.eli_mob_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Mob%20Eliminated.mp3?v=1739696086785",2);
              upd("eli_mob_sfx", 0);
            }
            if(data.deposit_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/utomp3.com%20-%20MONEY%20SOUND%20EFFECT%20.mp3?v=1739696030709",2);
              upd("deposit_sfx", 0);
            }
            if(data.win_sfx == 1) {
              con.StopSound(4);
              setTimeout(function(){
                con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_11%20SAT%20GOC.mp3?v=1739696640381",1);                
              }, 500);
              upd("win_sfx", 0);
            }
          
        });
        
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});