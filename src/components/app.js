/*eslint-disable strict */ //disabling because jQuery runs as a global var

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
            );
    }
});

module.exports = App;