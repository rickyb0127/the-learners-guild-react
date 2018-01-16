"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('./components/app');
var Home = require('./components/home');
var About = require('./components/about');
var Dashboard = require('./components/dashboard');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="dashboard" component={Dashboard} />
    </Route>
    );

module.exports = routes;