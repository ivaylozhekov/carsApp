import * as React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { HomeHeaderInfo } from "../../../../models/HomeHeaderInfo";
import { SocialButtons } from "../../../../components/SocialButtons/SocialButtons";

interface PropTypes {
  info: HomeHeaderInfo;
  social: string[];
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    social: state.home.social as string[]
  };
};

@connect(mapStateToProps)
export default class FavoriteHeader extends React.Component<PropTypes, {}> {
  public render() {
    const favoriteImg = require("../../../../assets/images/favoriteImg.png");
    const { social } = this.props;
    return (
      <Row className="favorite-header">
        <Col xs={12}>
          <div
            className="content"
            style={{ backgroundImage: `url(${favoriteImg})` }}
          >
          <div className="title">FAVORITE CARS</div>
            <SocialButtons social={social} />
          </div>
        </Col>
      </Row>
    );
  }
}
