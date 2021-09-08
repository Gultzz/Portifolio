window.onload = hora(), tchu(), piscar();
window.onscroll =()=>{
    console.log("movendo scroll");
};
function hora(){
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    setTimeout(function(){
        var horas = document.querySelector(".header2-1");
        var lua = document.getElementById("lua");
        if(h > 18 && h < 24){
            lua.src = "src/moon-fill.svg";
        }else if(h > 0 && h < 6){
            lua.src = "src/moon-fill.svg";
        }else{
            lua.src = "src/sun-fill.svg";
        }
        horas.innerHTML = `${h}:${m}:${s}`;
        hora();
    },100);
}
function tchu(){
    setTimeout(function(){
        var flexa = document.getElementById("flexa");
        if(flexa.style.bottom == "10px" || flexa.style.bottom == 10){
            flexa.style.transition = "0.3s";
            flexa.style.bottom = "20px";
        }else{
            flexa.style.transition = "0.3s";
            flexa.style.bottom = "10px";
        }
        tchu();
    },300);
}

function piscar(){
    setTimeout(function(){
        var span = document.getElementById("span");
        if(span.style.visibility == "hidden"){
            span.style.transition = "0.1";
            span.style.visibility = "visible";
        }else{
            span.style.transition = "0.1";
            span.style.visibility = "hidden";
        }
        piscar();
    },700);
}