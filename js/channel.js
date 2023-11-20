import { firebaseConfig } from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Remove the second call to initializeApp()
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
document.getElementById("channel-form").addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("channel-name").value;
  const desc = document.getElementById("channel-description").value;
  console.log(name, desc);
  save(name, desc);
}

function save(name, desc) {
  var channelsRef = ref(database, "channel_list");
  var newdata = push(channelsRef);
  set(newdata, {
    channel_name: name,
    description: desc,
  })
    .then((result) => {
      var doneElement = document.getElementById("done");

      // Set visibility to visible with a transition effect
      doneElement.style.visibility = "visible";
      doneElement.style.transition = "visibility 2s ease-in";

      setTimeout(function () {
        window.location.href = "./main-channel.html";
      }, 2000);
    })
    .catch((err) => {
      console.error("Error:", err.message);
      alert(err.message);
    });
}
