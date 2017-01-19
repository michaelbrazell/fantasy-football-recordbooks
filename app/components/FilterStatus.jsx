var React = require('react');

var FilterStatus = React.createClass({
  render: function () {
    return (
      <fieldset className="fieldset" onChange={this.filterPlayers}>
        <legend>Filter Players:</legend>
        <input type="radio" name="filterStatus" value="All" id="filterShowAll"/><label htmlFor="filterShowAll">All</label>
        <input type="radio" name="filterStatus" value="Active" id="filterShowActive"/><label htmlFor="filterShowActive">Active</label>
      </fieldset>
    )
  }
});

module.exports = FilterStatus;
