document.addEventListener("DOMContentLoaded", (event) => {
    console.log("hello world");

    const e_target = document.getElementById("target");
    const e_playarea = document.getElementById("playarea");

    e_playarea.addEventListener("click", (event) => {
        console.log(event.target === e_target ? "Treffer!" : "Daneben!");
    });
});
