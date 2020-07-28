$('.number1').animate({ num: 1386 - 3 }, {
    duration: 3000,
    step: function (number1){
        this.innerHTML = (number1 + 3).toFixed(0) 
    }
});
$('.number2').animate({ num: 386 - 3 }, {
    duration: 3000,
    step: function (number1){
        this.innerHTML = (number1 + 3).toFixed(0) 
    }
});
$('.number3').animate({ num: 18303 - 3 }, {
    duration: 3000,
    step: function (number1){
        this.innerHTML = (number1 + 3).toFixed(0) 
    }
});
$('.number4').animate({ num: 98 - 3 }, {
    duration: 3000,
    step: function (number1){
        this.innerHTML = (number1 + 3).toFixed(0) 
    }
});
const menu = document.querySelector('.menu')
const menuBody = document.querySelector('.menu_body')
const contain = document.querySelector('.container')
const rad = document.querySelector('#radio1')
const rad1 = document.querySelector('.radio11')
const rad2 = document.querySelector('#radio2')
const rad22 = document.querySelector('.radio22')
const rad3 = document.querySelector('#radio3')
const rad33 = document.querySelector('.radio33')
const rad4= document.querySelector('#radio4')
const rad44 = document.querySelector('.radio44')

rad.onclick = function(){
    rad1.style.color = '#2596D9'
}
rad2.onclick = function(){
    rad22.style.color = '#2596D9'
}
rad3.onclick = function(){
    rad33.style.color = '#2596D9'
}
rad4.onclick = function(){
    rad44.style.color = '#2596D9'
}


$(".btn").click(function(){
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
  });



menu.onclick = function(){
        contain.classList.toggle('toggle') 
    
        menuBody.classList.toggle("toggle1")
    
}
