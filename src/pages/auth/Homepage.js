import React from "react";
import { useRedirect } from "../../hooks/useRedirect";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "../../styles/Homepage.module.css";

const Homepage = () => {
  useRedirect();

  return (
    <Container fluid className="p-0 h-100">
      <Row className="g-0 vh-100">
        <Col
          xs={12}
          lg={4}
          className={`${styles.TitleContainer} order-1 order-lg-2 d-flex align-items-center justify-content-center text-center p-4`}
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
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

        <Col
          xs={12}
          lg={8}
          className={`${styles.ImageCol} order-2 order-lg-1`}
        ></Col>
      </Row>
    </Container>
  );
};

export default Homepage;
