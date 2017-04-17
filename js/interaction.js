function goToByScroll(id){
    id = id.replace("link", "");
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

$("#skillslink").click(function(e) {
    e.preventDefault();
    goToByScroll($(this).attr("id"));
});

$("#portfoliolink").click(function(e) {
    e.preventDefault();
    goToByScroll($(this).attr("id"));
});

if (document.getElementById("skills").style.visibility == visible) {
    console.log("visible");
}