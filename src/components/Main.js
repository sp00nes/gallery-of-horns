import React from 'react';
import data from '../horned-beasts.json';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    //makes an array of Horned Beasts that have data from the json file.
    let renderAll = () => {
      let beastArray = [];
      data.forEach((beastData, idx) => {
        beastArray.push(
          <HornedBeast
            name={beastData.title}
            imageURL={beastData.image_url}
            info={beastData.description}
            key={idx}
          />
        )
      });
      return beastArray;
    }

    let renderFav = () => {
      let beastArray = [];
      data.forEach((beastData, idx) => {
        if (beastData.fav) {
          beastArray.push(
            <HornedBeast
              name={beastData.title}
              imageURL={beastData.image_url}
              info={beastData.description}
              key={idx}
            />
          )
        }
      });
      return beastArray;
    }
    return (
      <main>
        {renderAll()}
      </main>
    )
  }
}
export default Main;
