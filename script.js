document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#name").onkeyup = () => {
        if(checkName(document.querySelector("#name").value)){
            document.querySelector("#name").style.border = "5px solid green";
        } else {
            document.querySelector("#name").style.border = "1px solid red";
        }
    };

    const checkName = name => {
        return /^[a-zA-Z ]*$/.test(name);
    };
});