import React from 'react';
import heartBlack from '../img/lovehearttransparentpngblack.png';
import heartRed from '../img/love-heart-transparent-png.png';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

const imagesPath = {heartBlack,heartRed}

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      votes: 0
    };
  }

  handleClick = () => {
    this.setState(state => ({ favorite: !state.favorite }))
  };

  getImageName = () => this.state.favorite ? 'heartRed' : 'heartBlack'

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  handleTitleClick = () => {
    this.props.handleOpenModal(this.props.name);
  }

  render() {
    let imageName = this.getImageName();
    return (
      <article>
        <div className='title'>
        <h2 onClick={this.handleTitleClick}>{this.props.name}</h2>
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
        <Button onClick={this.handleVotes}>Vote</Button>
        <p>{this.state.votes}</p>
      </article>
    )
  }
}
export default HornedBeast;
