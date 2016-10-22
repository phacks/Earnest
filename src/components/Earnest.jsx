import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Header from './Header'

export class Earnest extends React.Component {
  render() {
    return <div>
        <Header />
        <div className="ph3 ph5-ns">{this.props.children}</div>
      </div>
  }
};

function mapStateToProps(state) {
  return {};
}

export const EarnestContainer = connect(mapStateToProps, actionCreators)(Earnest);
