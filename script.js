document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#name").onkeyup = () => {
        if (checkName(document.querySelector("#emai").value)) {
            document.querySelector("#name").style.border = "5px solid green";
        } else {
            document.querySelector("#name").style.border = "1px solid red";
        }
    };

    const checkName = name => {
        return /^[a-zA-Z ]*$/.test(name);
    };
    document.querySelector("#email").onkeyup = () => {
        if (checkEmail(document.querySelector("#email").value)) {
            document.querySelector("#email").style.border = "5px solid green";
        } else {
            document.querySelector("#email").style.border = "5px solid red";
        }
    };

    const checkEmail = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
});