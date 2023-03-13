function getInfo(e) {
    e.preventDefault()

    var templateParams = {
        fullname: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    console.log(templateParams);

    emailjs.send('gmail', 'shfbfhjsdj', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Booking Succesful")
        }, function (error) {
            console.log('FAILED...', error);
            alert("Error with Logging in");
        });

}