<<<<<<< HEAD
console.log("JS is connected");
=======
console.log("JS is connected");

// document.getElementById("device").innerHTML = window.navigator.userAgent;

let myDevice = window.navigator.userAgent;
document.getElementById("device").innerHTML = myDevice;

if(myDevice.indexOf("Mobile")>-1){

    window.location.replace("assets/html/mobile.html");
}

if(myDevice.indexOf("Macintosh")>-1){

    window.location.replace("assets/html/desktop.html");
}
>>>>>>> bf169a38aeebc5389c0e870754c1e1b9220a3a04
