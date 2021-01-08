class Sierpinski {
  constructor(iteration) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.iteration = iteration;
    this.i = iteration;
    this.interval;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    clearInterval(this.interval);
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.interval = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.startSier(
        this.canvas.width / 4 - 100,
        this.canvas.height / 4 + 57,
        this.canvas.width / 4 + 100,
        this.canvas.height / 4 + 57,
        this.canvas.width / 4,
        this.canvas.height / 4 - 114,
        this.i
      );
      this.i--;
      if (this.i === 0) {
        this.i = 5;
      }
    }, 1000);
  }

  drawLine(x1, y1, x2, y2) {
    this.ctx.fillStyle = "#fff";
    this.ctx.strokeStyle = "#fff";

    this.ctx.beginPath();

    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    this.ctx.closePath();
  }

  startSier(x1, y1, x2, y2, x3, y3, i) {
    i = i + 1;
    if (i === this.iteration + 1) {
      this.drawLine(x1, y1, x2, y2);
      this.drawLine(x2, y2, x3, y3);
      this.drawLine(x3, y3, x1, y1);

      return;
    }
    let xa = (x1 + x2) / 2;
    let ya = (y1 + y2) / 2;
    let xb = (x2 + x3) / 2;
    let yb = (y2 + y3) / 2;
    let xc = (x3 + x1) / 2;
    let yc = (y3 + y1) / 2;

    this.startSier(x1, y1, xa, ya, xc, yc, i);
    this.startSier(xa, ya, x2, y2, xb, yb, i);
    this.startSier(xc, yc, xb, yb, x3, y3, i);
  }
}

window.onload = () => {
  let iteration = 5;
  new Sierpinski(iteration);
};
