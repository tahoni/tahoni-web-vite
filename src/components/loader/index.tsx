import { PuffLoader } from "react-spinners";
import classes from './index.module.scss';

interface LoaderProps {
    isLoading: boolean;
}

export const Loader = (props: LoaderProps): React.ReactElement => {

    return (
        <PuffLoader loading={props.isLoading} color={classes.loaderColor} 
        className={classes.loader}/>
    );
}
