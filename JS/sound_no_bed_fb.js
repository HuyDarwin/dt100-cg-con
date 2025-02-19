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

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }
          
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
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/6%20giay.mp3?v=1739983703309",2);
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
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Dung.mp3?v=1739983705816",2);
              upd("right_ans_sfx", 0);
            }
            if(data.wrong_ans_sfx == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Sai%20sai.mp3?v=1739983709889",2);
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
                con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Intro.mp3?v=1739975842756",1);                
              }, 500);
              upd("win_sfx", 0);
            }
          
            if(data.welcome_bed == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Nhac%20nen.mp3?v=1739975844395",5);
              upd("welcome_bed", 0);
            }
            if(data.intro == 1) {
              con.StopSound(5);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Intro.mp3?v=1739975842756",1);
              upd("intro", 0);
            }
            if(data.new_player == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Sau%20QC%20%2B%20Nguoi%20choi%20moi.mp3?v=1739977069488",1);
              upd("new_player", 0);
            }
            if(data.comm_in == 1) {
              con.StopSound(4,1);
              con.StopSound(5,1);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Vao%20Quang%20Cao.mp3?v=1739977067828",1);
              upd("comm_in", 0);
            }
            if(data.comm_out == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Sau%20QC%20%2B%20Nguoi%20choi%20moi.mp3?v=1739977069488",1);
              upd("comm_out", 0);
            }
            if(data.theme == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_06.mp3?v=1739707955411",3);
              upd("theme", 0);
            }
            if(data.restyle_1 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_01.mp3?v=1739707961717",1);
              upd("restyle_1", 0);
            }
            if(data.restyle_5 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/1_tegen_100_restyle_2019_05.mp3?v=1739707966312",3);
              upd("restyle_5", 0);
            }
            if(data.restyle_8 == 1) {
              con.StopSound(3);
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/Chon%20NC%20moi.mp3?v=1739983703853",5);
              upd("restyle_8", 0);
            }
          
            if(data.custom_1 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/01.mp3?v=1739804137276", 1);
              upd("custom_1", 0);
            }     
            if(data.custom_2 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/02.mp3?v=1739804150310", 1);
              upd("custom_2", 0);
            }     
            if(data.custom_3 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/03.mp3?v=1739804158883", 1);
              upd("custom_3", 0);
            }     
            if(data.custom_4 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/04.mp3?v=1739804166535", 1);
              upd("custom_4", 0);
            }     
            if(data.custom_5 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/05.mp3?v=1739804178456", 1);
              upd("custom_5", 0);
            }     
            if(data.custom_6 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/06.MP3?v=1739804183095", 1);
              upd("custom_6", 0);
            }     
            if(data.custom_7 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/07.MP3?v=1739804187524", 1);
              upd("custom_7", 0);
            }     
            if(data.custom_8 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/08.MP3?v=1739804191451", 1);
              upd("custom_8", 0);
            }     
            if(data.custom_9 == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/09.MP3?v=1739804200694", 1);
              upd("custom_9", 0);
            }          
          
            if(data.pause_bed == 1) {
              con.StopSound(4,1);
              con.StopSound(5,1);
              upd("pause_bed", 0);
            }
            if(data.resume_bed == 1) {
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