import Rectange from "./rectangle.js"

/**
 * 
 * @param {Number} totalBoxes
 * @param {HTMLCanvasElement} canvas 
 */
export default function grid(totalBoxes, canvas) {
    const ctx = canvas.getContext("2d");

    // box dimensions including gap of 'space' on each side
    const boxWidth = 200;
    const boxHeight = 100;
    const space = 8;
    const maxWidth = window.innerWidth - 32;

    const COLS = Math.floor(maxWidth / boxWidth);
    canvas.width = COLS * boxWidth;
    canvas.style.width = (COLS * boxWidth) + "px";

    const ROWS = Math.max(Math.ceil(totalBoxes / COLS), 6);
    canvas.height = ROWS * boxHeight;
    canvas.style.height = (ROWS * boxHeight) + "px";

    canvas.style.padding = space + "px";
    
    // clear canvas before new drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let boxes = 0;
    for(let r = 0; r < ROWS; ++r) {
        for(let c = 0; c < COLS && boxes < totalBoxes; ++c) {
            const rectange = new Rectange(r, c, ctx, boxWidth, boxHeight, space);
            rectange.draw();
            boxes += 1;
        }
    }

}