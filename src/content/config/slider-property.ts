export interface ISliderProperty {
    image: string;
    text: string;
    alt: string;
}

export class SliderProperty implements ISliderProperty {
    index: number;
    image: string;
    text: string;
    alt: string;

    constructor(property: {index: number, image: string, text: string, alt?: string}) {
        this.index = property.index;
        this.image = property.image;
        this.text = property.text;
        this.alt = (property.alt ? property.alt : '');
    }
}
