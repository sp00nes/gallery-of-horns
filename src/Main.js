import React from 'react';
import data from './horned-beasts.json';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    //makes an array of Horned Beasts that have data from the json file.
    let beastArray = [];
    data.forEach((beastData, idx) => {
      beastArray.push(
        <HornedBeast
          name={beastData.title}
          imageURL={beastData.image_url}
          key={idx}
        />
      )
    });
    return (
      <main>
       {beastArray}
      </main>
    )
  }
}
export default Main;
