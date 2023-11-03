AOS.init();

window.onmousemove = function(mouse) {
    if (document.getElementById("heading--backdrop") != undefined) {
        let circle = document.getElementById("heading--backdrop");
        circle.animate({
            left: `${mouse.clientX}px`,
            top: `${mouse.clientY}px`
        },{duration: 2000, fill: "forwards"});
    }
}