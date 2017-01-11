var React = require('react');
var data = require('json!data');

var TeamStats = React.createClass({
  getInitialState: function() {
    var teams = data;
    return { teams } ;
  },
  componentDidMount: function() {
    $(".tablesorter").tablesorter({
      sortList: [[1,1],[2,0]]
    });
  },
  render: function() {
    return (
      <div>
        <h1>Team Records</h1>
        <div className="row">
          <div className="columns small-12 medium-12">
            <div className="table-scroll">
              <table className="tablesorter" id="afc-east">
                <thead>
                  <tr>
                    <th></th>
                    <th>W - L</th>
                    <th>Win Pct</th>
                    <th>Avg Place</th>
                    <th>Playoffs</th>
                    <th>Championships</th>
                    <th>Total Seasons</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    return (
                      <tr key={i}>
                        <td>{team.Name}</td>
                        <td>{team.Wins} - {team.Loss}</td>
                        <td>{team.WinPct}</td>
                        <td>{team.AvgPlace}</td>
                        <td>{team.Playoffs}</td>
                        <td>{team.Champ}</td>
                        <td>{team.TotalSeasons}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = TeamStats;
