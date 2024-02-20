import { Image } from "react-bootstrap";
import classes from "./index.module.scss";

interface SliderStepProps {
    image: string;
    text: string;
    alt?: string;
}

export const SliderStep = (props: SliderStepProps) => {

    return (
        <>
            <div className={classes.cover}>
                <div className={classes.coverContent}>
                    <Image src={props.image} alt={props.alt ? props.alt : ''} 
                    className={classes.coverImage}/>
                    <span className={classes.coverText}>{props.text}</span>
                </div>
            </div>
        </>
    );
}
