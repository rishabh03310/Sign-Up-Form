function addData(){
    var email = document.getElementById('Email').Value;
    var pass = document.getElementById('pwd').Value;

    //two way to store data in localstorage

    //1
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userpwd', pass);

    //2
    //  localStorage.userEmail = email;
    //  localStorage.userPwd = pass;
 }