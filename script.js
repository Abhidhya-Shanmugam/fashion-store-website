const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✨ Message Sent Successfully!\n\nThank you for contacting FashionHub.\nWe’ll get back to you soon.");

form.reset();

});

}