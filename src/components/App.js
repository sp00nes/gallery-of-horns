import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import data from '../horned-beasts.json';
import SelectedBeast from './SelectedBeast.js';
import Main from './Main.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      id: 0,
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    });
  };

  handleOpenModal = (name, id) => {
    console.log(id);
    this.setState({
      isModalShown: true,
      name: name,
      id: id
    });
  };

  // --RENDER-- //
  render() {
    return (
      <>
        <Header>
        </Header>
        <Main
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <Footer />
        <SelectedBeast
          isModalShown={this.state.isModalShown}
          handleCloseModal={this.handleCloseModal}
          ID={data[this.state.id]._id}
          data={data}
        />
      </>
    );
  }
}

export default App;
