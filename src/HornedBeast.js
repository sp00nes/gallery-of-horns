import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
        />
      </article>
    )
  }
}
export default HornedBeast;
