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
              con.StopSound(4);
              con.StopSound(5);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/los_eindje_nadenken.mp3?v=1739630120173",2);
              setTimeout(function(){
                con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/b_01_vraag_spanning.mp3?v=1739630222120",4);                
              }, 500);
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
            if(data.mob_answer == 1) {
              con.StopSound(4);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/denk_tijd_06_sec_full.mp3?v=1739630706495",2);
              setTimeout(function(){
                con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/spanning_nadenken.mp3?v=1739527926198",5,7);  
              }, 7000);
              upd("mob_answer", 0);
            }
            if(data.escape_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/geld_er_af_na_escape%20SAT%20GOC.mp3?v=1739631377667",2);
              upd("escape_sfx", 0);
            }
        });
        
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});