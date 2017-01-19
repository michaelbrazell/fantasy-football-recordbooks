var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var TeamStats = require('TeamStats');
var SeasonStats = require('SeasonStats');
var WhatsNew = require('WhatsNew');
var Blogs = require('Blogs');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/season-stats" component={SeasonStats}/>
      <Route path="/whats-new" component={WhatsNew}/>
      <Route path="/blogs" component={Blogs}/>
      <IndexRoute component={TeamStats}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
