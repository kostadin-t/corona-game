export default class Corona extends PIXI.Container {
    constructor() {
      super();
      let graphics = new PIXI.Graphics();
      graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
      graphics.beginFill(0xDE3249, 1);
      graphics.drawCircle(100, 250, 50);
      graphics.endFill();
      this.addChild(graphics);
    }
  }