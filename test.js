function entering(){
    const id = document.getElementById("id").value;
    if (id == ""){
        document.getElementById("idErrorBox").style.display = 'block';
    }
    else{
        document.getElementById("first").innerHTML = id;
    }
    const pw = document.getElementById("pw").value;

    
    if (pw == ""){
        document.getElementById("passwordErrorBox").style.display = 'block';
    }
    else{
        document.getElementById("second").innerHTML = pw;
    }
    
}