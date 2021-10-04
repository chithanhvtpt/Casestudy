function saveData(dataArr) {
    localStorage.setItem('data',JSON.stringify(dataArr));
}

function loadData() {
    if (localStorage.hasOwnProperty('data')) {
        let data = localStorage.getItem('data');
        return JSON.parse(data);
    } else {
        return [];
    }
}
function saveUserLogin(name){
    localStorage.setItem('currentLogin', name);
}
function loadUserLogin(){
    if (localStorage.hasOwnProperty("currentLogin")){
        return localStorage.getItem("currentlogin");
    }else{
      return ""
    }
}
