import { Image } from "react-bootstrap";
import { ISliderProperty } from "../../content/config/slider-property";
import { images } from "../../utils/images";
import classes from "./index.module.scss";

export const SliderStep = (props: ISliderProperty) => {

    return (
        <>
            <div className={classes.cover}>
                <div className={classes.coverContent}>
                    <Image src={images[props.image]} alt={props.alt} className={classes.coverImage}/>
                    <span className={classes.coverText}>{props.text}</span>
                </div>
            </div>
        </>
    );
}
