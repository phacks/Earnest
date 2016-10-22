import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Scenes extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <p>Scenes</p>
  }
};
