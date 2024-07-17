import {ReactElement} from "react";
import {Breakpoints as TahoniBreakpoints} from "@tahoni/tahoni-lib-react";

export const Breakpoints = (): ReactElement => {
    return (
        <>
            {(import.meta.env.VITE_SHOW_BREAKPOINTS == "true") ?
                <TahoniBreakpoints/> : ''
            }
        </>
    )
}
