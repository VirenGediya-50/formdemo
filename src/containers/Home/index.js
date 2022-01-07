import React, { useState } from "react";
import { Col, Container, Row, Tab, TabPane, Tabs } from "react-bootstrap";
import SignUpForm from "../SignUpForm";

const Home = () => {
  const [selectedKey, setSelectedKey] = useState("fan");

  return (
    <Container fluid className="background">
      <Row className="justify-content-center">
        <Col sm={8} xs={8} md={6} className="main_div">
          <Tabs activeKey={selectedKey} onSelect={(key) => setSelectedKey(key)}>
            <Tab eventKey="fan" title="Fan Signup" />
            <Tab eventKey="talent" title="Talent SignUp" />
            <TabPane active={selectedKey === "fan"}>
              <SignUpForm selectedKey={selectedKey} />
            </TabPane>
            <TabPane active={selectedKey === "talent"}>
              <SignUpForm selectedKey={selectedKey} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
