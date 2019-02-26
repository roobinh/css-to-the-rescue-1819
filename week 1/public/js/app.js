//When frontpage is clicked, directing to homepage
function clicked() {
    console.log("frontpage clicked!")
    document.querySelector("[data-front]").style.display = 'none';
    document.querySelector("[data-home]").style.display = 'flex';
}

//When scrolling to drinks, drinks fly in
$(window).scroll(function(){
    var a = document.scrollingElement.scrollTop;

    if(a > 200) {
        document.querySelector("[data-flying]").style.display = 'block';
    }
});