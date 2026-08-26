import {
  db,
  collection,
  addDoc,
  serverTimestamp
} from "./firebase.js";

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  status.textContent = "Sending...";

  try {

    await addDoc(collection(db, "messages"), {

      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      subject: document.getElementById("subject").value,

      message: document.getElementById("message").value,

      createdAt: serverTimestamp()

    });

    status.textContent =
      "Message sent successfully!";

    form.reset();

  } catch (error) {

    console.error(error);

    status.textContent =
      "Something went wrong. Please try again.";

  }

});