/**
 * Created by zhangh2 on 8/25/15.
 */

var HelloMessage = React.createClass({
  render: function() {
    return <div data-module="dc-charts"><span>
    Hello {this.props.name}
    </span>
    <button data-type="button">Test1</button>
    <button data-type="button">Test2</button>
    </div>;
  }
});

React.render(
<HelloMessage name="John" />,
  document.getElementById('test')
);

