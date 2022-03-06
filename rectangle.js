export default class Rectange {
    /**
     * 
     * @param {Number} row 
     * @param {Number} col 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {Number} width
     * @param {Number} height
     * @param {Number} space
     */
    constructor(row, col, ctx, width, height, space) {
        this.color = "#ffffff";
        this.row = row;
        this.col = col;
        this.ctx = ctx;
    
        // offset x, y by 'space' to create a gap between rectangles
        this.x = width * this.col + space;
        this.y = height * this.row + space;
    
        this.height = height - 2*space;
        this.width = width - 2*space;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fillRect(this.x + this.width/2 - 16, this.y - 7, 32, 7);
        this.ctx.fillRect(this.x + this.width/2 - 16, this.y + this.height, 32, 7);
        
        this.ctx.font = `${this.width/10}px Arial`;
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";

        const text = `[${Math.floor(this.x)}, ${Math.floor(this.y)}]`;
        this.ctx.fillText(text, this.x + this.width/2, this.y + this.height/2);
    }
}