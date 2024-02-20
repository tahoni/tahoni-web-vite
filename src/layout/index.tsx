import React from 'react';
import { Container } from 'react-bootstrap'
import { Loader } from '../components/loader';
import { MaskOverlay } from '../components/overlay';
import { CoverSlider } from '../components/slider';
import classes from './index.module.scss';

export const Layout = (): React.ReactElement => {

    return (
        <>
            <Loader isLoading={false}/>
            <MaskOverlay mask={false}/>
            <Container fluid className={classes.layout}>
                <main className={classes.main}>
                    <CoverSlider/>
                </main>
            </Container>
        </>
    );
}
