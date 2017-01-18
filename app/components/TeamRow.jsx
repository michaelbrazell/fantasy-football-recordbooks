var React = require('react');

var TeamRow = React.createClass({
  render: function () {
    return (
      <tr key={this.props.key+'_'+this.props.wins}>
        <td className={this.props.status === 'Retired' ? 'retired-status' : 'active-status'}><i className="fa fa-circle" aria-hidden="true"></i> {this.props.Name}</td>
        <td>{this.props.wins} - {this.props.losses}</td>
        <td>{this.props.winPct}%</td>
        <td>{this.props.totalPf}</td>
        <td>{this.props.totalPa}</td>
        <td>{this.props.adjustedPf}</td>
        <td>{this.props.adjustedPa}</td>
        <td>{this.props.pointDifferential}</td>
        <td>{this.props.avgPlace}</td>
        <td>{this.props.playoffs}</td>
        <td>{this.props.champ}</td>
        <td>{this.props.totalSeasons}</td>
      </tr>
    )
  }
})

module.exports = TeamRow;
