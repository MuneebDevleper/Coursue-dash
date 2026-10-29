
let left = document.querySelector("#to-left");
let right = document.querySelector("#to-right");
let divs = document.querySelector(".three-div");
let themeToggle = document.querySelector(".theme-toggle");

// let btn1 = document.querySelector("#btn-1");
// let btn2 = document.querySelector("#btn-2");


left.addEventListener("click", () => {
    divs.scrollLeft -= 300;
    left.scrollIntoView({ behavior: "smooth" });
});
right.addEventListener("click", () => {
    divs.scrollLeft += 300;
    right.scrollIntoView({ behavior: "smooth" });
    1000;
});




$(function () {
    $('.bars li .bar').each(function (key) {
        var percentage = $(this).data('percentage');
        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });
});



let btn1 = document.querySelector ('#btn-1')
let btn2 = document.querySelector ('#btn-2')

btn1.addEventListener ('click' , () => {
    btn2.classList.remove ("view")
    btn1.classList.toggle ("view")

})

btn2.addEventListener ('click' , () => {
    btn2.classList.toggle ("view")
        btn1.classList.remove ("view")
})

themeToggle.addEventListener('click', () => {
    console.log("clickehedub")
    document.body.classList.toggle('theme-changere');
});



let bar = document.querySelector ("#bar");
let menu = document.querySelector (".left-bar");

bar.addEventListener ('click' , () => {
    console.log ("jydfscmjvdcmngvcdYJVHA");
    menu.classList.toggle("active");

    bar.style.rotate= '360deg';
})







