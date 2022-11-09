import React from 'react';
import heartBlack from './lovehearttransparentpngblack.png';
import heartRed from './love-heart-transparent-png.png';
import './HornedBeast.css';

const imagesPath = {heartBlack,heartRed}

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  handleClick = () => {
    this.setState(state => ({ favorite: !state.favorite }))
  };

  getImageName = () => this.state.favorite ? 'heartRed' : 'heartBlack'

  render() {
    let imageName = this.getImageName();
    return (
      <article>
        <div className='title'>
        <h2>{this.props.name}</h2>
        <img
          onClick={this.handleClick}
          className='favorite'
          src={imagesPath[imageName]}
          alt='Favorite'
        />
        </div>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
        />
        <p>{this.props.info}</p>
      </article>
    )
  }
}
export default HornedBeast;
