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
              <table className="tablesorter hover" id="standings">
                <thead>
                  <tr>
                    <th></th>
                    <th>W - L <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th>Win% <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Points For">PF</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Points Against">PA</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="An average points for, adjusted for season length">aPF</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="An average points against, adjusted for season length">aPA</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Average adjusted point differential">+/-</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Average place at the end of the season">Place</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total number of playoff appearances">Playoff</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total championships won">Champ</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                    <th><span data-tooltip aria-haspopup="true" className="has-tip top" data-disable-hover="false" tabIndex="2" title="Total number of seasons in the league">Seasons</span> <i className="fa fa-sort" aria-hidden="true"></i><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map(function(team, i){
                    function checkRetiredStatus() {
                      if (team.status === 'Active') {
                        return (
                          <i className="fa fa-circle" aria-hidden="true"></i>
                        )
                      } else {
                        return (
                          <i className="fa fa-circle-o" aria-hidden="true"></i>
                        )
                      }
                    }
                    return (
                      <tr key={i}>
                        <td>{checkRetiredStatus()} {team.Name}</td>
                        <td>{team.wins} - {team.losses}</td>
                        <td>{team.winPct}%</td>
                        <td>{team.totalPf}</td>
                        <td>{team.totalPa}</td>
                        <td>{team.adjustedPf}</td>
                        <td>{team.adjustedPa}</td>
                        <td>{team.pointDifferential}</td>
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
