// ⚡ Ajoute EmailJS
(function(){
    emailjs.init("9Z6cd1ockNrqlpI4n"); // <- remplace par ton Public Key
})();

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        prenom: form.querySelector('input[name="prenom"]').value,
        nom: form.querySelector('input[name="nom"]').value,
        email: form.querySelector('input[name="email"]').value,
        tel: form.querySelector('input[name="tel"]').value,
        message: form.querySelector('textarea[name="message"]').value
    };

    emailjs.send("service_rchopbv", "template_t6xz7vq", data)
        .then(() => {
            alert("✅ Message envoyé avec succès !");
            form.reset();
        }, (err) => {
            console.error("Erreur:", err);
            alert("❌ Erreur lors de l’envoi du message sale con ");
        });
});