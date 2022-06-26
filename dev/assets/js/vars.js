export let a = 'aezakmi';

export class Slider {
    constructor(selector, settings) {
        this.selector = selector;
        this.autoplay = settings.autoplay || false;
        this.speed = settings.speed || 100;
    }
}