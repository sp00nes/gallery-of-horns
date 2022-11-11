import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    //makes an array of Horned Beasts that have data from the json file.
    let beastArray = this.props.data.map((beastData, idx) => {
      return <HornedBeast
        name={beastData.title}
        imageURL={beastData.image_url}
        info={beastData.description}
        id={beastData._id}
        key={idx}
        handleOpenModal={this.props.handleOpenModal}
      />
    });

    return (
      <main>
        {beastArray}
      </main>
    )
  }
}
export default Main;
