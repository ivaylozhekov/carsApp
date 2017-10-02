import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { HomeSubHeaderInfo } from "../../../../models/HomeSubHeaderInfo";

interface PropTypes {
  info: HomeSubHeaderInfo;
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    info: state.home.subHeaderInfo,
  };
};

@connect(mapStateToProps)
export default class HomeSubHeader extends React.Component<PropTypes, {}> {
  public render() {
    const { info } = this.props;
    return (
      <Row className="home-sub-header">
        <Col md={12}>
          <h6 className="title">{info.Title}</h6>
        </Col>
        <Col md={12}>
          <div className="container text">{info.Text}</div>
        </Col>
      </Row>
    );
  }
}
