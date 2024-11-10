function getpass() {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()*";
    var length = 12;
    var password = "";

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * char.length); //Math.random() = 0 - 1 float numbers, like 0.3,0.4;
        password += char.charAt(random); // charAt select from char which index is random value 
    }
    document.getElementById("password").value = password;
}
function copyPass(){
    password.select();
    document.execCommand("copy");
}