$(window).resize(function(){
    if(window.innerWidth<768){
        $('.toolButton').css("display","flex")
    }else{
        $('.toolButton').css("display","none")
    }
})