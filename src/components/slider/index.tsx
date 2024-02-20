import React, { useRef } from "react";
import Slider, { SliderProps } from "rc-slider";
import { HandlesProps } from "rc-slider/lib/Handles";
import Handle, { HandleProps } from "rc-slider/lib/Handles/Handle";
import { SliderConfig } from "../../content/config/slider-config";
import { SliderStep } from "./slider-step";
import classes from "./index.module.scss";

export const CoverSlider = () => {
  type SliderElementType = 
    React.ReactElement<HandleProps, string | React.JSXElementConstructor<number | number[]>>;

  const sliderConfig = useRef(new SliderConfig());

  const handleSliderRender: HandlesProps["handleRender"] = (origin: SliderElementType, 
    sliderProps: SliderProps): SliderElementType & SliderProps => {

    const index = sliderProps.value;
    const sliderProperties = sliderConfig.current.sliders.filter(property => {
      return property.index === index;
    });


    if ((sliderProperties) && (sliderProperties.length > 0)) {
      const sliderProperty = sliderProperties[0];
      return (
          <SliderStep {...sliderProperty}/>
      )

    }

    return (
      <></>
    );
  };

  console.log('sliderConfig', sliderConfig.current.sliders);

  return (
    <>
      {sliderConfig.current ? sliderConfig.current.sliders.map(slider => {
        return (
          <Slider step={slider.index} className={classes.coverSlider} value={slider.index} 
          handleRender={handleSliderRender} key={slider.index}/>
        )
      }) : 
        <></>
      }
    </>
  );
};
