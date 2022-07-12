let header = document.querySelector("#header")
window.onscroll = function () {
    // console.log(this);
    if (this.scrollY > 340) {
        header.classList.add("active-toggle")

    }
    else {
        header.classList.remove("active-toggle")

    }
}
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".loading").classList.add("d-none")
     
        document.body.style = "overflow-y:scroll"
    }, 4000);
}