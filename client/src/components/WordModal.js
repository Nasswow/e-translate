import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addWord } from "../actions/wordActions";
import PropTypes from "prop-types";
class WordModal extends Component {
  state = {
    modal: false,
    word: "",
    translation: "",
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newWord = {
      word: this.state.word,
      translation: this.state.translation,
    };
    //Add word via addWord action
    this.props.addWord(newWord);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Word
          </Button>
        ) : (
          <div>
            <h1>Welcome to our Translation Service,</h1>
            <h5 className="mb-3 ml-4">
              Please login or register to access the site!
            </h5>
          </div>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Words</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="word">Amharic Word</Label>
                <Input
                  type="text"
                  name="word"
                  id="word"
                  placeholder="Enter Amharic word here"
                  onChange={this.onChange}
                />
                <Label for="translation" style={{ marginTop: "2rem" }}>
                  English Translation
                </Label>
                <Input
                  type="text"
                  name="translation"
                  id="translation"
                  placeholder="Enter English translation here"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Word
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  word: state.word,
  translation: state.translation,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { addWord })(WordModal);
