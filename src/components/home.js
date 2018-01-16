"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var buttonText = "Sign up/Log in";

var Login = React.createClass({
    render: function () {
        return (
            <div>
                <div className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.props.submitClicked}><Link to="/dashboard">Submit</Link></button>
                                <button type="button" className="btn btn-secondary" onClick={this.props.dismissClicked}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Home = React.createClass({
    getInitialState: function(){
        return {
            showLoginModal: false
        };
    },

    toggleShowModal: function(){
        if(this.state.showLoginModal){
            this.setState({
                showLoginModal: false
            });
        } else {
            this.setState({
                showLoginModal: true
            });
        }
    },

    authenticateUser: function(){
        console.log("auth");
    },

    render: function(){
        return (
            <div>
                <nav className="navbar nav">
                    <a className="navbar-brand" href="#">Home</a>
                    <div className="navbar-brand pull-right">
                        <a href="#" onClick={this.toggleShowModal}>Log in</a>
                        {this.state.showLoginModal ? <Login submitClicked={this.authenticateUser} dismissClicked={this.toggleShowModal} /> : null}
                    </div>
                </nav>
                <div className="bg-1-overlay"></div>
                <img src="../images/index-bg-1.jpg" className="bg-img" />
                <div className="index-txt head-format">
                    <h1>Welcome To The Learner's Guild</h1>
                    <h1>A Place Where Anything Is Possible</h1>
                </div>
                <div className="secondary-content"></div>
            </div>
        );
    }
});

module.exports = Home;