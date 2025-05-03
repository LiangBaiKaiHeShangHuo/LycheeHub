$('.imgBreakButton').click(function () {
    alert("回不去了！")
})
$(window).resize(function(){
    $('.bodyMain-left').css({'height':window.innerHeight - 75 + 'px'})
    $('.bodyMain-right').css({'height':window.innerHeight - 75 + 'px'})
})