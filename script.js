window.onload = hora(), tchu(), piscar();
// window.onscroll =()=>{
//     console.log("movendo scroll");
// };

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
        if(h >= 18 && h <= 23){
            lua.src = "src/moon-fill.svg";
        }else if(h >= 0 && h <= 6){
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

function fechar(){
    var nada = document.getElementById("nada");
    nada.style.display = "none";
}
function abrir(){
    var nada = document.getElementById("nada");
    nada.style.display = "flex";
}
function fechar2() {
    var teste = document.getElementById("teste");
    var teste2 = document.getElementById("teste2");
    teste2.style.transition = "1s";
    teste.style.display = "none";
    teste2.style.width = "0vh";
}
function abrir2() {
    var teste = document.getElementById("teste");
    var teste2 = document.getElementById("teste2");
    teste2.style.transition = "1s";
    teste.style.display = "block";
    teste2.style.display = "block";
    teste2.style.width = "60vh";
}
// function criar(){
//     var pages = document.getElementById("pages");
//     var flex = document.getElementById("flexa");
//     if(pages.style.display == "none"){
//         pages.style.transition= "1s";
//         pages.style.display = "block";
//         flex.style.display = "flex";
//     }else{
//         pages.style.transition= "1s";
//         pages.style.display = "none";
//         flex.style.display = "none";
//     }
// }

//  (function(){
//      var names2 = document.getElementById("textinho");
//      names2.innerHTML = "Oi cara";
//  }())

// let sla = 2;
// sla = ()=>{
//     return sla
// }
// console.log(sla())


// let texto = document.getElementById("textt");

// function typeWriter(elemento, type) {
//     const textoArray = elemento.innerText.split('');
//     elemento.innerText = '';
//     textoArray.forEach((letra, i) => {
//       setTimeout(() => elemento.innerText += letra, 75 * i);
//     });
// }
// function repeat() {
//     setTimeout(function () {
//         typeWriter(texto);
//         repeat();
//     },5000);
// }
function suma() {
    var flexa = document.getElementById("flexa");
    flexa.style.visibility = "hidden";
}

// function mecher() {
//     setTimeout(function(){
//         var left = document.getElementById("left");
//         if(left.style.marginLeft == "5vh"){
//             left.style.transition = "0.5s";
//             left.style.marginLeft = "1vh";
//         }else{
//             left.style.transition = "0.5s";
//             left.style.marginLeft = "5vh";
//         }
//         mecher();
//     },500);
// }