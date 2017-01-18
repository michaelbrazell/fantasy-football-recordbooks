// Not using this.  Data is all grabbed in TeamStats Component. Should break out
var axios = require('axios');

const GITHUB_URL = 'https://api.github.com/repos/michaelbrazell/fantasy-football-recordbooks/commits';

module.exports = {
  getData: function () {
    var requestUrl = `${GITHUB_URL}`;
    axios.get(requestUrl)
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  }
}
