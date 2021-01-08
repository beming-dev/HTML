import { sierpinski } from "./sierpinski.js";

class app {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.sier;

    this.interval;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    if (this.sier) this.sier.stop();

    this.sier = new sierpinski(this.canvas.width, this.canvas.height, this.ctx);
  }
}

window.onload = () => {
  new app();
};
