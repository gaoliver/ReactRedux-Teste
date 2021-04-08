import React from "react";
import { connect } from "react-redux";
import { Button, Row } from "reactstrap";

import * as Action from "../../store/actions";

const Header = ({ number, dispatch }) => (
  <Row
    style={{
      backgroundColor: "#eee",
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: "center",
      marginBottom: 20
    }}
  >
    <Button color="danger" onClick={() => dispatch(Action.diminuir())}>
      Diminuir
    </Button>
    <h3 style={{ width: 100, textAlign: 'center' }}> {number} </h3>
    <Button color="danger" onClick={() => dispatch(Action.aumentar())}>
      Aumentar
    </Button>
  </Row>
);

export default connect((state) => ({
  number: state.number.number,
}))(Header);
