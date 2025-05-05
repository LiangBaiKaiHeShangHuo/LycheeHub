if (window.innerWidth < 768) {
    $('.toolButton').css("display", "flex")
} else {
    $('.toolButton').css("display", "none")
}

$('main').css("height", window.innerHeight - 75 + "px")