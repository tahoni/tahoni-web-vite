import React, { useRef } from 'react';
import { Container, Image } from 'react-bootstrap'
import slide01 from '../assets/images/slide-01.png';
import classes from './index.module.scss';
import { Loader } from './loader';
import { MaskOverlay } from './overlay';

export const Layout = (): React.ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Loader isLoading={true}/>
            <MaskOverlay container={containerRef}/>
            <Container fluid className={classes.layout} ref={containerRef}>
                <main className={classes.main}>
                    <div className={classes.cover}>
                        <div className={classes.coverContent}>
                            <Image src={slide01} alt="" className={classes.coverImage}/>
                            <span className={classes.coverText}>My Coding Journey</span>
                        </div>
                    </div>
                </main>
            </Container>
        </>
    );
}
