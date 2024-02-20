import { SliderProperty } from './slider-property';
import config from './sliders.json';

export class SliderConfig {
    sliders: SliderProperty[] = [];

    constructor() {
        this.sliders = config.sliders.map(slider => {
            return new SliderProperty({...slider});
        });
    }
}
