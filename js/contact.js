function validate() {
    var isValid = true;
    if (document.getElementById("yname").value == '') {
        isValid = false;
        document.getElementById("msg_yname").innerText = "Please fill out your name.";
    } else if (document.getElementById("yname").value.trim().length > 100) {
        isValid = false;
        document.getElementById("msg_yname").innerText = "Your name should not exceed 100 characters";
    } else {
        document.getElementById("msg_yname").innerText = "";
    }

    if (document.getElementById("yemail").value == '') {
        isValid = false;
        document.getElementById("msg_yemail").innerText = "Please fill out your email.";
    } else if (!validateEmail(document.getElementById("yemail").value.trim())) {
        isValid = false;
        document.getElementById("msg_yemail").innerText = "Your email is not right.";
    } else if (document.getElementById("yemail").value.trim().length > 100) {
        isValid = false;
        document.getElementById("msg_yemail").innerText = "Your email should not exceed 100 characters.";
    } else {
        document.getElementById("msg_yemail").innerText = "";
    }


    if (document.getElementById("subject").value == '') {
        isValid = false;
        document.getElementById("msg_subject").innerText = "Please fill out the subject.";
    } else if (document.getElementById("subject").value.trim().length < 50) {
        isValid = false;
        document.getElementById("msg_subject").innerText = "Subject should not shorter than 50 characters.";
    } else if (document.getElementById("subject").value.trim().length > 250) {
        isValid = false;
        document.getElementById("msg_subject").innerText = "Subject should not exceed 250 characters.";
    } else {
        var regex = new RegExp("\r\n|\r|\n");
        if (regex.test(document.getElementById("subject").value.trim())) {
            isValid = false;
            document.getElementById("msg_subject").innerText = "";
        } else {
            document.getElementById("msg_subject").innerText = "";
        }
    }

    if (document.getElementById("message").value == '') {
        isValid = false;
        document.getElementById("msg_message").innerText = "Please fill out the message.";
    } else if (document.getElementById("message").value.trim().length > 500) {
        isValid = false;
        document.getElementById("msg_message").innerText = "Message should not exceed 500 characters.";
    } else {
        document.getElementById("msg_message").innerText = "";
    }
    return isValid;

}

function checkBreakLine(e) {
    if (e.keyCode === 13) {
        return false;
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}