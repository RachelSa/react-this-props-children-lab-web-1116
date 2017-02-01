var React = require('react');
var ReactDOM = require('react-dom');

export default class ThemedDecorations extends React.Component {
  render() { 
    const classChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      )
    })

    return (
          <div> 
              {classChildren}
            </div>
            )
        
  }
}

module.exports = ThemedDecorations
