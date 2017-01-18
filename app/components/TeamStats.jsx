var React = require('react');
var TeamRow = require('TeamRow');
var data = require('json!data');

var TeamStats = React.createClass({
  getInitialState: function() {
    return {
      filter: null,
      teams: data
    }
  },
  filterPlayers: function (e) {
    var filterChoice = e.target.value;
    console.log('Filter choice selected: ' + filterChoice)
    this.setState({
      filter: filterChoice,
      teams: data
    });
  },
  componentDidMount: function() {
    $(".tablesorter").tablesorter({
      sortList: [[1,1],[2,0]]
    });
    $('.has-tip').foundation();
  },
  componentDidUpdate: function() {
    $(".tablesorter").tablesorter({
      sortList: [[1,1],[2,0]]
    });
  },
  render: function() {
    var that = this;
    console.log('Component Rendered and Filter is ' + that.state.filter);
    return (
      <div>
        <h1>Team Records</h1>
        <div className="row">
          <div className="columns small-12 medium-12">
            <fieldset className="fieldset" onChange={this.filterPlayers}>
              <legend>Filter:</legend>
              <input type="radio" name="filterStatus" value="All" id="filterShowAll"/><label htmlFor="filterShowAll">All</label>
              <input type="radio" name="filterStatus" value="Active" id="filterShowActive"/><label htmlFor="filterShowActive">Active</label>
            </fieldset>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12 medium-12">
            <div className="scroll">
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
                    if (that.state.filter === null || that.state.filter === "All") {
                      // DIsplay teams that are both active and retired
                      if (team.status === "Active" || team.status === "Retired") {
                        return (
                          <TeamRow
                            key={i} status={team.status} Name={team.Name}
                            wins={team.wins} losses={team.losses} winPct={team.winPct}
                            totalPf={team.totalPf} totalPa={team.totalPa} adjustedPf={team.adjustedPf}
                            adjustedPa={team.adjustedPa} pointDifferential={team.pointDifferential} avgPlace={team.avgPlace}
                            playoffs={team.playoffs} champ={team.champ} totalSeasons={team.totalSeasons} />
                        )
                      }
                    } else if (that.state.filter === "Active") {
                      // display teams that are only active
                      if (team.status === "Active") {
                        return (
                          <TeamRow
                            key={i} status={team.status} Name={team.Name}
                            wins={team.wins} losses={team.losses} winPct={team.winPct}
                            totalPf={team.totalPf} totalPa={team.totalPa} adjustedPf={team.adjustedPf}
                            adjustedPa={team.adjustedPa} pointDifferential={team.pointDifferential} avgPlace={team.avgPlace}
                            playoffs={team.playoffs} champ={team.champ} totalSeasons={team.totalSeasons} />
                        )
                      }
                    }

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
