import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from '../horned-beasts.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      name: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    });
  };

  handleOpenModal = (name) => {
    this.setState({
      isModalShown: true,
      name: name
    });
  };

  render() {
    return (
      <>
        <Header/>
        <Main
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <Footer/>
        <SelectedBeast 
          isModalShown={this.state.isModalShown}
          handleCloseModal={this.handleCloseModal}
          name={this.state.name}
        />
      </>
    );
  }
}

export default App;
