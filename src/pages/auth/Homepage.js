import React from 'react';
import { useRedirect } from '../../hooks/useRedirect';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../../styles/Homepage.module.css';


const Homepage = () => {
  useRedirect();
  return (
    <Container className={styles.Container}>
      <Row>
        <Col xs={7}></Col>
        <Col xs={5} className={styles.TitleContainer}>
          <h1 className={styles.Title}>BonsaiHive</h1>
          <hr className={styles.Line} />
          <hr className={styles.SecondLine} />
          <Row>
            <Col className={styles.IntroContainer}>
              <p>
              Bonsai Hive is a dedicated community for bonsai lovers in West Sussex. 
              Share your bonsai photos, exchange tips, and connect with local enthusiasts who share your passion.
               Discover new styles, follow fellow artists, and grow your bonsai network right here in West Sussex.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;