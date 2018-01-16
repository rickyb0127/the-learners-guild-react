"use strict";

var React = require('react');
var Header = require('./common/header');

var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="dashboard-profile">
                                <div className="profile-picture">
                                    your image here
                                </div>
                                <div className="personal-info">
                                    name
                                    <br/>
                                    job title
                                    <br/>
                                    my skills
                                    <br/>
                                    location
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="dashboard-feed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus libero, placerat eu faucibus quis, ullamcorper in tortor. Donec accumsan nibh vel tortor pellentesque, in tempor magna tincidunt. Pellentesque eget sollicitudin erat. Curabitur dapibus ante eget fringilla tincidunt. Proin sodales lorem non posuere rhoncus. Etiam vitae arcu dignissim orci auctor consectetur vitae non orci. Aenean justo sapien, luctus sed vulputate vel, tempus id nunc. Nam auctor venenatis neque, vestibulum pretium mauris congue non. Fusce elit ligula, posuere aliquet tempus at, convallis non ipsum.

                            Duis suscipit nulla et ligula bibendum, luctus pretium est condimentum. Duis gravida nibh odio, eu dictum libero mollis in. Morbi iaculis ultrices ante nec convallis. Cras sollicitudin arcu ligula, sed ullamcorper nisi facilisis eget. Donec a odio nec mauris tristique consectetur sit amet vel nisl. Vivamus a ullamcorper nibh. Sed non lacus nec quam feugiat iaculis. Aliquam malesuada venenatis nibh, ut viverra dolor sagittis vel. Nullam vulputate nulla quis lorem fringilla venenatis. Cras auctor nulla sed sapien vehicula imperdiet. Proin a suscipit enim. Proin sit amet ipsum urna. Donec faucibus purus eget interdum semper. Suspendisse sit amet lorem non libero porta fermentum eu id massa. Sed sed nulla commodo, semper leo ac, fringilla lectus.

                            Sed non scelerisque dolor. Donec ornare massa id elit facilisis suscipit. Nulla porttitor dui eu justo bibendum, sit amet iaculis tellus molestie. In ac blandit est. Pellentesque facilisis aliquam tellus. Pellentesque magna urna, maximus non purus quis, blandit mattis dui. Nam congue nulla nec mi tempor, eu dignissim ligula sollicitudin. Pellentesque finibus, mauris nec placerat pellentesque, ante urna pretium nisl, a pretium lectus nisl id arcu. Vivamus mattis cursus nibh eu volutpat. Proin ornare pretium tempor.

                            Fusce accumsan commodo leo, eu sagittis arcu lobortis in. Quisque faucibus ipsum odio, ac condimentum enim tincidunt sed. Sed gravida elit ut arcu aliquet, sed consectetur risus feugiat. Donec mollis dolor id velit mattis, nec faucibus enim congue. Donec nec fringilla sapien. Sed volutpat enim ut libero vehicula, tristique malesuada augue mattis. Fusce porta sodales magna, nec consectetur libero mattis suscipit. Duis sit amet facilisis lorem. Nullam ullamcorper velit sit amet efficitur mollis. Sed placerat aliquet quam, id maximus magna pulvinar eget. Phasellus ut congue tortor. Curabitur auctor consectetur nisl. Pellentesque sed arcu sit amet ante efficitur sodales.

                            Praesent tempor pellentesque posuere. Etiam eleifend sit amet risus in porta. Ut nec justo non ligula imperdiet scelerisque placerat id arcu. Fusce egestas orci diam, ac dictum nibh dignissim sed. Quisque egestas volutpat sem quis laoreet. Phasellus quis purus vitae mauris rhoncus fringilla. Vestibulum interdum fringilla justo, in facilisis massa luctus vel. Pellentesque nisl enim, tincidunt sit amet efficitur ut, vulputate ac velit. Duis in euismod nibh, id porttitor urna. Mauris sollicitudin sapien mollis felis ultrices, interdum commodo magna vestibulum. Maecenas ac vehicula orci.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dashboard-sidebar-config">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus libero, placerat eu faucibus quis, ullamcorper in tortor. Donec accumsan nibh vel tortor pellentesque, in tempor magna tincidunt. Pellentesque eget sollicitudin erat. Curabitur dapibus ante eget fringilla tincidunt. Proin sodales lorem non posuere rhoncus. Etiam vitae arcu dignissim orci auctor consectetur vitae non orci. Aenean justo sapien, luctus sed vulputate vel, tempus id nunc. Nam auctor venenatis neque, vestibulum pretium mauris congue non. Fusce elit ligula, posuere aliquet tempus at, convallis non ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
});

module.exports = Dashboard;