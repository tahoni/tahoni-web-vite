import ReactDOM from 'react-dom';
import classes from './index.module.scss';
import { RefObject } from 'react';

interface MaskOverlayProps {
}

export const MaskOverlay = (props: MaskOverlayProps) => {
    return (
        <div className={classes.maskOverlay}/>
    )
}
