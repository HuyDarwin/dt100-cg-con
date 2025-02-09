import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
//

const db = getDatabase();

//

onValue(ref(db), (snapshot) => {
    const data = snapshot.val();

});

//


//

remove(ref(db));
$('button').attr("disabled","true");
$('.reload').removeAttr("disabled");
$('.q-submit').removeAttr("disabled");