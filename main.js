const clock = document.getElementById('clock');
setInterval(function(){ //setInterval(function(){})
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)  //1000 stand for it will inscreases by one only