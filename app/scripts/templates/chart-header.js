/**
 * Created by zhangh2 on 8/25/15.
 */

var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", {"data-module": "dc-charts"}, React.createElement("span", null, 
    "Hello ", this.props.name
    ), 
    React.createElement("button", {"data-type": "button"}, "Test1"), 
    React.createElement("button", {"data-type": "button"}, "Test2")
    );
  }
});

React.render(
React.createElement(HelloMessage, {name: "John"}),
  document.getElementById('test')
);

