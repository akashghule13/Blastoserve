import grid from "./grid.js";

/** @type {HTMLInputElement} */
const num = document.getElementById("num");

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");


const build = () => {
    grid(Number(num.value), canvas);
}

num.addEventListener("change", build);
window.addEventListener("resize", build);
build();