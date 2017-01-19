// NOt using this.  Component is included in TeamStats.  Ran into an issue passing the prop up to the parent to change status

var React = require('react');

var FilterStatus = React.createClass({
  filterPlayers: function (e) {
    var filterChoice = e.target.value;
    console.log('Filter choice selected: ' + filterChoice)
    this.setState({
      filter: filterChoice,
      teams: data
    });
  },
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
