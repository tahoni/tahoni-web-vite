import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import slide01 from '../assets/images/slide-01.png';
import classes from './index.module.scss';

export const Layout = (): React.ReactElement => {
    return (
        <Container fluid className={classes.layout}>
            <main className={classes.main}>
                <div className={classes.cover}>
                    <div className={classes.coverContent}>
                        <Image src={slide01} alt="" className={classes.coverImage}/>
                        <span className={classes.coverText}>My Coding Journey</span>
                    </div>
                </div>
            </main>
        </Container>
    );
}
