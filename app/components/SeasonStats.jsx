var React = require('react');

var SeasonStats = React.createClass({
  componentDidMount: function () {
    $('.has-tip').foundation();
  },
  render: function () {
    return (
      <div>
        <h1>Season Stats</h1>
        <p>Sorry this hasn't been built yet...</p>
        <p>Testing Components like Tooltip: <span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Points Against">PA</span></p>
      </div>
    )
  }
});

module.exports = SeasonStats;
