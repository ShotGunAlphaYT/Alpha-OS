function login() {
    let input = document.getElementById("input").value;
    let password = "1234";

    if  (input === password) {
        window.location="..../OS/os.html";
    } else {
        alert("Wrong Password!");
    }
}