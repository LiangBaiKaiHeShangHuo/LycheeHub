$(window).resize(function(){
    if(window.innerWidth<768){
        $('.toolButton').css("display","flex")
    }else{
        $('.toolButton').css("display","none")
    }
})

$('.toolButton').click(function(){
    $('.bottomPut').css("display",$('.bottomPut').css("display")==="flex"?"none":"flex")
})

if(window.innerWidth<768){
    $('.toolButton').css("display","flex")
}else{
    $('.toolButton').css("display","none")
}
