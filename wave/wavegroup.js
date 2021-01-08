import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 5;
    this.totalPoints = 10;

    this.color = [
      "rgba(255, 200, 0, 0.4)",
      "rgba(255, 150, 100, 0.4)",
      "rgba(255, 100, 200, 0.4)",
      "rgba(255, 55, 20, 0.4)",
      "rgba(255, 0, 200, 0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
