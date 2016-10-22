import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <nav className="db dt w-100 border-box pa3 ph5-l">
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/home" title="Home">Home</Link>
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/up-next" title="Up next">Up next</Link>
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/scenes" title="Scenes">Scenes</Link>
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/characters" title="Characters">Characters</Link>
        <div className="db dtc v-mid tc tr-l">
          <Link className="link dim dark-gray f6 f5-l dib" to="/my-account" title="My account">My account</Link>
        </div>
      </nav>
  }
};
