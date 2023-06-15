let ajax = new XMLHttpRequest();
ajax.open("GET", "https://www.espruino.com/json/BANGLEJS.json");
ajax.send();
ajax.onload = function () {
    document.getElementById("idiv2").innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    console.log(obj);
}


