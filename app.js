import Corona from './corona.js';

export default class App extends PIXI.Application {
    constructor() {
      super({
        transparent: false,
        width: 700,
        height: 700
        });
        this.createCorona();
    };

    createCorona() {
        let corona = new Corona();
        this.stage.addChild(corona);
    }

}