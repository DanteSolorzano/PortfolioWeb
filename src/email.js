function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : "Contact-Email",
        message : document.getElementById("message").value,
    }
    emailjs.send("service_ffczvhd", "template_hujqfn7",parms).then(alert("Email sent succesfully"))
}