console.log("ik werk!");

function clicked() {
    console.log("frontpage clicked!")
    document.querySelector("[data-front]").style.display = 'none';
    document.querySelector("[data-home]").style.display = 'flex';
}