var msg = "My first Javascript Statment!";
function updateMessage () {
    var el = document.getElementById("message");
    el.textContent = msg
}
updateMessage();