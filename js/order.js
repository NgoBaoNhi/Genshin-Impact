function validate() {
    var isValid = true;
    if (document.getElementById("cosplay").value == "0") {
        isValid = false;
        document.getElementById("msg_cosplay").innerText = "Please select our product.";
    } else {
        document.getElementById("msg_cosplay").innerText = "";
    }


    if (document.getElementById("yname").value == '') {
        isValid = false;
        document.getElementById("msg_yname").innerText = "Please fill out your name.";
    } else if (document.getElementById("yname").value.trim().length > 100) {
        isValid = false;
        document.getElementById("msg_yname").innerText = "Your name should not exceed 100 characters";
    } else {
        document.getElementById("msg_yname").innerText = "";
    }


    if (document.getElementById("message").value.trim().length > 30) {
        isValid = false;
        document.getElementById("msg_message").innerText = "Message should not exceed 30 characters.";
    } else {
        document.getElementById("msg_message").innerText = "";
    }

    let date = document.getElementById("date").value;
    if (date == '') {
        isValid = false;
        document.getElementById("msg_date").innerText = "Please fill out the deliver date.";
    } else {
        let current = new Date(date);
        current.setHours(0, 0, 0, 0);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (current < today) {
            document.getElementById("msg_date").innerText = "Date must be in the future!";
            isValid = false;
        } else {
            document.getElementById("msg_date").innerText = "";

        }
    }

    if (document.getElementById("adr").value == '') {
        isValid = false;
        document.getElementById("msg_adr").innerText = "Please fill out the address.";
    } else if (document.getElementById("adr").value.trim().length > 500) {
        isValid = false;
        document.getElementById("msg_adr").innerText = "Address should not exceed 500 characters.";
    } else {
        document.getElementById("msg_adr").innerText = "";
    }
    return isValid;
}

document.getElementById("cosplay").addEventListener("change", function() {
    var index = document.getElementById("cosplay").value;
    changeClother(index);
});

function changeClother(index) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("preview-video")[index].classList.add("active");
}

function changeHair(id) {
    if (document.getElementById(id).checked) {
        document.getElementById("h_" + id).classList.add("i-active");
    } else {
        document.getElementById("h_" + id).classList.remove("i-active");
    }
}