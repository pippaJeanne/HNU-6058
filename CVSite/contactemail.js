
// on initialise le SDK (software development kit) de EmailJS avec notre ID utilisateur
emailjs.init("tvaS9gFwkal5q8F6j");

// on envoie un email lorsque le formulaire est soumis
document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault();

  // on obtient des données de formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // on envoie des e-mails en utilisant EmailJS et on passe les paramètres du modèle
  emailjs.send("service_w1z97v8", "template_0f5mtg9",{
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(function(response) {
    console.log("Email sent successfully!");
    const mes = document.createElement("p");
    const svg = document.getElementById("svgFooter");
    document.body.insertBefore(mes, svg);
    mes.textContent="Email envoyé avec succès !";
    document.getElementById("contact").style.display = 'none';
    //document.getElementById("contact").reset();
  }, function(error) {
    console.error("Erreur d'envoi :", error);
    alert("Il y a eu une erreur. Réessayez s'il vous plaît.");
  });
});
