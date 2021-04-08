import React from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <Container>
    <Row style={{ justifyContent: 'center' }}>
      <strong>Módulo:</strong>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
      <h4 style={{ textAlign: 'center' }}>{activeModule.title}</h4>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
      <strong>Aula:</strong>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
      <h4>{activeLesson.title}</h4>
    </Row>
  </Container>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
