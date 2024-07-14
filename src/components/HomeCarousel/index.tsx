import {ReactElement} from "react";
import {ImageSourceDescription} from "@tahoni/tahoni-lib-react";
import {CoverCarousel} from "@tahoni/tahoni-lib-react";
import {HomeImages} from "./HomeImages.ts";

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
