function checkData(){
    var enterEmail = document.getElementById('Email').value;
    var enterPwd = document.getElementById('pwd').value;

    //get data from localstorage

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            alert("login Successful");
        }
        else{
            alert("wrong Password");
        }
    }
    else{
        alert("Invaild datails");
    }
}