function sendMail() {
    var params = {
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_h4qpj2k";
    const templateID = "template_k1edh1i";
  
    emailjs
      .send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
        })
        .catch(err=>console.log(err));
  
}