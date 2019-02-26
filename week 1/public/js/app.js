console.log("ik werk!");

function clicked() {
    console.log("frontpage clicked!")
    document.querySelector("[data-front]").style.display = 'none';
    document.querySelector("[data-home]").style.display = 'flex';
}

$(window).scroll(function(){
    var a = document.scrollingElement.scrollTop;

    if(a > 200) {
        document.querySelector("[data-flying]").style.display = 'block';
    }

    console.log("scroll value = " + a);
});