import React from "react";
import { Provider } from "react-redux";
import { Container, Col, Row } from "reactstrap";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <Sidebar />
            </Col>
            <Col>
              <Video />
            </Col>
          </Row>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
