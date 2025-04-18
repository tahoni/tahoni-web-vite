import {ReactElement} from "react";
import {CoverSlider, ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";
import {HomeImages} from "./HomeImages.ts";

export const HomeSlider = (): ReactElement => {
    const homeText: string = 'Under Construction';
    const homeSlides: ImageWithSourceAndDescription[] = [
        {image: HomeImages.waterLilyImage.image,
            name: HomeImages.waterLilyImage.name,
            text: homeText},
    ];

    return (
        <CoverSlider slides={homeSlides} infinite={false} autoPlay={false}/>
    )
}
