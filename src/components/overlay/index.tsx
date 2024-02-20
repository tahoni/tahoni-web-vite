import classes from './index.module.scss';

interface MaskOverlayProps {
    mask: boolean;
}

export const MaskOverlay = (props: MaskOverlayProps) => {

    return (
        <>
            {props.mask ? 
                <div className={classes.maskOverlay}/>
            :
                <></>
            }
        </>  
    );
}
