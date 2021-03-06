var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="row">
          <div className="columns small-12">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">FF Records</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>All Time Stats</IndexLink></li>
                <li><Link to="/season-stats" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Season Stats</Link></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><Link to="/whats-new" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>What's New</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
