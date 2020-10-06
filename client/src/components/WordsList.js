import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getWords, deleteWord, addWord } from "../actions/wordActions";
import PropTypes from "prop-types";

class WordsList extends Component {
  componentDidMount() {
    this.props.getWords();
  }
  onDeleteClick = (id) => {
    this.props.deleteWord(id);
  };
  render() {
    const { words } = this.props.word;
    return (
      <Container>
        <ListGroup>
          <ListGroupItem className="myContainer">
            <h6>Amharic Word</h6>
            <h6>English Translation</h6>
          </ListGroupItem>
          <TransitionGroup className="words-list">
            {words.map(({ _id, word, translation }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className="myContainer">
                  <Container className="myContainer">
                    <div>{word}</div>
                    <div>{translation}</div>
                  </Container>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    X
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

WordsList.propTypes = {
  getWords: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  word: state.word,
});
export default connect(mapStateToProps, { getWords, deleteWord })(WordsList);
