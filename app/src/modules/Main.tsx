import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header } from "./shared/components/header/Header";
import { Footer } from "./shared/components/footer/Footer";
import { FooterElement } from "../models/FooterElement";

interface PropTypes {
  stage: any;
  stageHeader: any;
  stageSubHeader: any;
  shared: {
    navigationElements: string[];
    footerElements: FooterElement;
  };
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    shared: state.shared
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
export class Main extends React.Component<PropTypes, {}> {
  public render() {
    const { stage, stageHeader, stageSubHeader } = this.props;
    return (
      <div className="site-main-container">
        <Header navigationElements={this.props.shared.navigationElements} />
        <main className="">
          {stageHeader}
          {stageSubHeader}
          {stage}
        </main>
        <Footer footerElements={this.props.shared.footerElements} />
      </div>
    );
  }
}

export const onEnter = (store, next, replace, callback) => {
  // Some login functionality may be added here
  callback();
};
