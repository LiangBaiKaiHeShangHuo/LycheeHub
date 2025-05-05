$(window).resize(function () {
    $('main').css("height", window.innerHeight - 75 + "px")
    if (window.innerWidth < 768) {
        $('.toolButton').css("display", "flex")
    } else {
        $('.toolButton').css("display", "none")
    }
    if(window.innerWidth<300){
        console.log(window.innerWidth)
    }
})