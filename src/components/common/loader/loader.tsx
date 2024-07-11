import {CSSProperties} from "react";
import {SyncLoader} from "react-spinners";
import classes from "./loader.module.scss";

export const Loader = (props: LoaderProps) => {
    const loaderOverrides: CSSProperties = {
        top: "50%",
        left: "50%",
        position: "absolute",
        zIndex: 88888,
    };

    return (
        <SyncLoader cssOverride={loaderOverrides} color={classes.loaderColor}
                    loading={props.isLoading}/>
    );
}

interface LoaderProps {
    isLoading: boolean;
}
