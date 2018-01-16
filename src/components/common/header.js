"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <IndexLink to="/" className="navbar-brand">
                                <div className="nav-logo">Home</div>
                            </IndexLink>
                        </div>
                        <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/about">My Groups</Link></li>
                                <li><Link to="/about">Top Teachers</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            );
    }
});

module.exports = Header;