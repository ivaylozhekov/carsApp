import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { HomeHeaderInfo } from "../../../../models/HomeHeaderInfo";
import * as FontAwesome from "react-fontawesome";
import { CustomButton } from "../../../../components/customButton/CustomButton";
import { SocialButtons } from "../../../../components/socialButtons/socialButtons";


interface PropTypes {
  info: HomeHeaderInfo;
  social: string[];
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    info: state.home.headerInfo,
    social: state.home.social as string[]
  };
};

@connect(mapStateToProps)
export default class HomeHeader extends React.Component<PropTypes, {}> {
  public render() {
    const { info, social } = this.props;
    return (
      <Row className="home-header">
        <Col xs={12}>
          <div
            className="content"
            style={{ backgroundImage: `url(${info.ImageURL})` }}
          >
            <div className="car-title">{info.Title}</div>
            <CustomButton className="active cust-btn">
              {info.ButtonText}
            </CustomButton>
            <SocialButtons social={social} />
          </div>
        </Col>
      </Row>
    );
  }
}
