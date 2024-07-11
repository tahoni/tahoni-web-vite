import {ReactElement} from "react";
import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import {HomeImages} from "./home-images.ts";
import {CoverCarousel} from "../common/cover-carousel/cover-carousel.tsx";

export const HomeCarousel = (): ReactElement => {
    const homeText: string = 'My Coding Journey';
    const homeSlides: ImageSourceDescription[] = [
        {source: HomeImages.waterLilyImage.source,
            description: HomeImages.waterLilyImage.description,
            text: homeText},
    ];

    return (
        <CoverCarousel slides={homeSlides} infinite={false} autoPlay={false}/>
    )
}
