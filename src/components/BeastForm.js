import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import { ListGroup, Form, Button } from 'react-bootstrap';



class BeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      howToSort: '',
      filteredData: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let newData;
    if (this.state.howToSort === '1') {
      newData = this.props.data.filter(numHorn => numHorn.horns === 1)
    } else if (this.state.howToSort === '2') {
      newData = this.props.data.filter(numHorn => numHorn.horns === 2)
    } else if (this.state.howToSort === '3') {
      newData = this.props.data.filter(numHorn => numHorn.horns === 3)
    } else if (this.state.howToSort === '100') {
      newData = this.props.data.filter(numHorn => numHorn.horns === 100)
    } else {
      newData = this.props.data
    }
    this.setState({
      filteredData: newData
    });
  }

  handleSelect = (e) => {
    this.setState({
      howToSort: e.target.value
    });
  }

  // --RENDER-- //
  render() {
    let numbers = this.state.filteredData.map((beastData, idx) => {
      return <HornedBeast
        name={beastData.title}
        imageURL={beastData.image_url}
        info={beastData.description}
        id={beastData._id}
        key={idx}
        handleOpenModal={this.props.handleOpenModal}
      />
    })
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* 
      <Form.Label>Your Name
        <Form.Control type="text" name="name" />
      </Form.Label>

      <Form.Group controlId="usersName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
      </Form.Group> */}

          <Form.Group>
            <Form.Label htmlFor="filterOption">Select Numbers</Form.Label>
            <Form.Select id="filterOption" name="selected" onChange={this.handleSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
              <option value="all">All</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>

        <ListGroup horizontal>
          {numbers}
        </ListGroup>
      </>
    );
  }
}

export default BeastForm;
