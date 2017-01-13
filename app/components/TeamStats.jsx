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
    $('.has-tip').foundation();
  },
  render: function() {
    return (
      <div>
        <h1>Team Records</h1>
        <div className="row">
          <div className="columns small-12 medium-12">
            <div className="table-scroll">
              <table className="tablesorter" id="standings">
                <thead>
                  <tr>
                    <th></th>
                    <th>W - L</th>
                    <th>Win%</th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Points For">PF</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Points Against">PA</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="An average points for, adjusted for season length">aPF</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="An average points against, adjusted for season length">aPA</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Average place at the end of the season">Place</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total number of playoff appearances">Playoff</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total championships won">Champ</span></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total number of seasons in the league">Seasons</span></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    return (
                      <tr key={i}>
                        <td>{team.Name}</td>
                        <td>{team.wins} - {team.losses}</td>
                        <td>{team.winPct}%</td>
                        <td>{team.totalPf}</td>
                        <td>{team.totalPa}</td>
                        <td>{team.adjustedPf}</td>
                        <td>{team.adjustedPa}</td>
                        <td>{team.avgPlace}</td>
                        <td>{team.playoffs}</td>
                        <td>{team.champ}</td>
                        <td>{team.totalSeasons}</td>
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
