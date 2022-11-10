import React from 'react';
import Modal from 'react-bootstrap/Modal'
import HornedBeast from './HornedBeast';

class SelectedBeast extends React.Component {
  render(){
    let beastData = this.props.data[this.props.ID];
    return (
      <>
        <Modal 
          show={this.props.isModalShown}
          onHide={this.props.handleCloseModal}  
        >
          <Modal.Header closeButton>
            <Modal.Body>
              <HornedBeast 
                name={beastData.title}
                imageURL={beastData.image_url}
                info={beastData.description}
              />
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
