function validateform() {
    var name = document.getElementById("box1").value;
    var password = document.getElementById("box2").value;

    if (name == null || name == '') {
        alert("name can't be blank")
    }
    else if(password.length < 6)
    {
        alert("Password must be six character")
    }


}