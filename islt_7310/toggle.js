function toggle(){
    var x = document.getElementById("hamburgerMenu")
    if (x.className == "hamburgerMenu"){
        x.className += "responsive";
    }else{
        x.className = "nav";
    }
}