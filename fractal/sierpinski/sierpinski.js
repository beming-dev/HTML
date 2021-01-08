class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class sierpinski {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.iteration = 5;
    this.i = this.iteration;
    this.interval;
    this.ctx = ctx;
    this.points = [
      new Point(width / 4 - 100, height / 4 + 57),
      new Point(width / 4 + 100, height / 4 + 57),
      new Point(width / 4, height / 4 - 114),
    ];

    this.interval = setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.startSier(this.points, this.i);
      this.i--;
      if (this.i === 0) this.i = this.iteration;
      console.log(this.i);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
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

  startSier(points, i) {
    i = i + 1;
    if (i === this.iteration + 1) {
      this.drawLine(points[0].x, points[0].y, points[1].x, points[1].y);
      this.drawLine(points[1].x, points[1].y, points[2].x, points[2].y);
      this.drawLine(points[2].x, points[2].y, points[0].x, points[0].y);

      return;
    }
    let xa = (points[0].x + points[1].x) / 2;
    let ya = (points[0].y + points[1].y) / 2;
    let xb = (points[1].x + points[2].x) / 2;
    let yb = (points[1].y + points[2].y) / 2;
    let xc = (points[2].x + points[0].x) / 2;
    let yc = (points[2].y + points[0].y) / 2;

    let points1 = [
      new Point(points[0].x, points[0].y),
      new Point(xa, ya),
      new Point(xc, yc),
    ];
    let points2 = [
      new Point(xa, ya),
      new Point(points[1].x, points[1].y),
      new Point(xb, yb),
    ];
    let points3 = [
      new Point(xc, yc),
      new Point(xb, yb),
      new Point(points[2].x, points[2].y),
    ];

    this.startSier(points1, i);
    this.startSier(points2, i);
    this.startSier(points3, i);
  }
}
