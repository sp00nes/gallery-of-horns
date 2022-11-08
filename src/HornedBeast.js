import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>👋 {this.state.greetings} greetings</p>
        <p onClick={this.handleGreeting}>Say Hello!</p>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
        />
        {/* WTF */}
        <div>{this.state.helpMe ? 'I need help' : ''}</div>
      </article>
    )
  }
}
export default HornedBeast;
