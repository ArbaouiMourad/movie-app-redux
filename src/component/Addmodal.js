
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { actionAdd} from "../js/actions/index";
import { connect } from "react-redux";

 class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      rating:'',
      image:'',
      modal: false

    };

    this.toggle = this.toggle.bind(this);
  }
handleChange=(event)=> {
  this.setState({
      [event.target.name]: event.target.value
  });
}

  toggle ()  {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Addmovie </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New-movie</ModalHeader>
          
          <ModalBody>
          title:<input type="text" name="title" onChange={this.handleChange} />
          rating:<input type="text" name="rating" onChange={this.handleChange} />
          image:<input type="text" name="image" onChange={this.handleChange} />
              
                </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.toggle();this.props.add(this.state)}}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  add:x => dispatch(actionAdd(x))
 });
export default connect(
 null ,
    mapDispatchToProps
  )(ModalExample);
