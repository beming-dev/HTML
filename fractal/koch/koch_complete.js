class koch {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.i = 7;
    this.iteration = setInterval(() => {}, 0);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    clearInterval(this.iteration);
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
    this.iteration = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.startKoch(
        this.canvas.width / 4 - 300,
        this.canvas.height / 4,
        this.canvas.width / 4 + 300,
        this.canvas.height / 4,
        Math.PI / 3,
        this.i
      );
      this.i--;
      if (this.i === 0) this.i = 7;
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

  startKoch(x1, y1, x2, y2, a, c) {
    c = c + 1;
    if (c === 8) {
      this.drawLine(x1, y1, x2, y2);
      return;
    }
    let xa = x1 + (x2 - x1) / 3;
    let ya = y1 + (y2 - y1) / 3;
    let xb = x1 + ((x2 - x1) / 3) * 2;
    let yb = y1 + ((y2 - y1) / 3) * 2;
    let xc = xa + (xb - xa) * Math.cos(-a) - (yb - ya) * Math.sin(-a);
    let yc = ya + (yb - ya) * Math.cos(-a) + (xb - xa) * Math.sin(-a);

    this.startKoch(x1, y1, xa, ya, Math.PI / 3, c);
    this.startKoch(xa, ya, xc, yc, Math.PI / 3, c);
    this.startKoch(xc, yc, xb, yb, Math.PI / 3, c);
    this.startKoch(xb, yb, x2, y2, Math.PI / 3, c);
  }
}

window.onload = () => {
  new koch();
};
