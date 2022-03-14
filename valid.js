
//--------------function validation
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "admin" && password == "admin") {
        alert("Login Succesfully...");
        window.location = "";
        return false;
    } 
    else {
        alert("Username and Password not correctly...")
    }
}