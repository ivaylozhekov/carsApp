import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface PropTypes {
}

const mapStateToProps = (state, ownProps = {}) => (
    { }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Dashboard extends React.Component <PropTypes, {}> {

    public render() {
        return (
            <div>
                This is the dashboard!
            </div>
        );
    }
}

export const onEnter = (store, next, replace, callback) => {
    // Some login functionality mah go here!
    callback();
};