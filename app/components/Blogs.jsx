var React = require('react');
// var GetUpdates = require('GetUpdates');
var axios = require('axios');

const GITHUB_URL = 'https://blogs.mathworks.com/cleve/wp-json/wp/v2/posts';

var Blogs = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      message: []
    }
  },
  componentDidMount: function () {
    var that = this;
    var requestUrl = `${GITHUB_URL}`;
    this.setState({
      isLoading: true,
      message: []
    });
    axios.get(requestUrl)
    .then(function(response){
      that.setState({
        message: response.data
      })
    });
  },
  render: function () {
    var {message, isLoading} = this.state;
    var that = this;
    console.log(this.state.message)
    return (
      <div>
        <h1>Blogs</h1>
        {Object.keys(this.state.message).map(function (key, i) {
          var item = that.state.message[key]
          var formatDate = new Date(item.commit.author.date)
          var dd = formatDate.getDate();
          var mm = formatDate.getMonth()+1;
          var yyyy = formatDate.getFullYear();
          return (
            <div key={i} className="row">
              <div className="columns small-2 medium-1">
                <img src={item.author.avatar_url} alt={item.commit.author.name}></img>
              </div>
              <div className="columns small-10 medium-11">
                <h5 className="commit-item"><a href={item.commit.html_url}>{item.commit.message} <i className="fa fa-link" aria-hidden="true"></i></a></h5>
                <p>By <a href={item.author.html_url}>{item.commit.author.name}</a>, on {mm}/{dd}/{yyyy}</p>
              </div>
              <div className="columns small-12">
                <hr></hr>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Blogs;
