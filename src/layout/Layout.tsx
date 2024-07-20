import {ReactElement} from "react";
import {Outlet} from "react-router";
import styles from "./Layout.module.scss";

export const Layout = (): ReactElement => {
    return (
        <div className={styles.layout}>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
