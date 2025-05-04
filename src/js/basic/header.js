$(window).resize(function(){
    if(window.innerWidth<768){
        $('.setButton>img').attr("src","./src/img/header/toolButton.png")
    }else{
        $('.setButton>img').attr("src","./src/img/header/setButton.png")
    }
})