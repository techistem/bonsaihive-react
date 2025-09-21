import React from "react";
import { useRedirect } from "../../hooks/useRedirect";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "../../styles/Homepage.module.css";

const Homepage = () => {
  useRedirect();

  return (
    <Container fluid className={styles.Container}>
      <Row className={styles.Row}>
        <Col lg={8} className={styles.ImageCol}></Col>
        <Col lg={4} className={styles.TitleContainer}>
          <div>
            <h1 className={styles.Title}>BonsaiHive</h1>
            <hr className={styles.Line} />
            <hr className={styles.SecondLine} />
            <div className={styles.Description}>
              <p>
                Bonsai Hive is a dedicated community for bonsai lovers in West
                Sussex. Share your bonsai photos, exchange tips, and connect
                with local enthusiasts. Discover new styles, follow artists, and
                grow your bonsai network here.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
