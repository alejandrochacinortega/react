"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function (transtion, params, query, callback) {
      if (!confirm('Are you sure you want to read?')) {
        transtion.about();
      } else {
        callback();
      }
    },

    willTransitionFrom: function (transtion, component) {
      if (!confirm('Are you sure you want to leave this exciting page?')) {
        transtion.about();
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>This application use the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
});

module.exports = About;