import React from "react";
import Slider, { SliderProps } from "rc-slider";
import { HandlesProps } from "rc-slider/lib/Handles";
import { HandleProps } from "rc-slider/lib/Handles/Handle";
import { SliderStep } from "./slider-step";
import slide01 from "../../assets/images/slide-01.png";
import slide02 from "../../assets/images/slide-02.png";
import slide03 from "../../assets/images/slide-03.png";
import classes from "./index.module.scss";

export const CoverSlider = () => {
  type SliderElementType = 
    React.ReactElement<HandleProps, string | React.JSXElementConstructor<number | number[]>>;

  const handleSliderRender: HandlesProps["handleRender"] = (origin: SliderElementType, 
    sliderProps: SliderProps): SliderElementType & SliderProps => {
    const index = sliderProps.value;
    if (index) {
      let image: string = "";
      const text = index.toString();
      switch (index) {
        case 1:
          image = slide01;
          break;
        case 2:
          image = slide02;
          break;
        case 3:
          image = slide03;
          break;
      }
      return (
        <SliderStep image={image} text={text} />
      );
    }
    return (
      <></>
    );
  };

  return (
    <>
      <Slider step={1} className={classes.CoverSlider} value={1} handleRender={handleSliderRender}/>
      <Slider step={2} className={classes.CoverSlider} value={2} handleRender={handleSliderRender}/>
      <Slider step={3} className={classes.CoverSlider} value={3} handleRender={handleSliderRender}/>
    </>
  );
};
