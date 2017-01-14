var React = require('react');

var WhatsNew = React.createClass({
  getInitialState: function () {
    var items
    return {
      items: {
        url: 'Hello'
      }
    }
  },
  componentDidMount: function () {
    fetch(`https://api.github.com/repos/michaelbrazell/fantasy-football-recordbooks/commits`)
    .then(result=> {
        this.setState({
          items:result.json()
        });
    });
  },
  render: function () {
    console.log(this.state.items)
    return (
      <div>
        <h1>What's New</h1>

      </div>
    )
  }
});

module.exports = WhatsNew;
