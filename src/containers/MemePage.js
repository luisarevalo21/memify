import React, { Component } from "react";
import classes from "./MemePage.module.css";
import CopyText from "react-copy-text";
import { connect } from "react-redux";

class MemePage extends Component {
  //   state = {
  //     text: "",
  //     memedText: ""
  //   };

  //   handleChange = event => {
  //     this.setState({ text: event.target.value });
  //   };
  //   copy = () => {};
  //   handleClick = () => {
  //     console.log("button was pressed");
  //     let memedText = "";
  //     const copyText = this.state.text;
  //     for (let element = 0; element < copyText.length; element++) {
  //       if (element % 2 === 0) {
  //         memedText += copyText[element].toLowerCase();
  //       } else {
  //         memedText += copyText[element].toUpperCase();
  //       }
  //     }

  //     this.setState({ memedText });
  //   };
  render() {
    let copyText = null;
    if (this.props.memedText !== "") {
      copyText = (
        <div className={classes.Div}>
          <p>{this.props.memedText}</p>
          <button className={classes.Button}>Copy</button>
        </div>
      );
    }

    return (
      <div className={classes.MemePage}>
        <textarea
          placeholder="Enter text to memeify"
          onChange={this.props.CHANGED}
          className={classes.TextArea}
        />
        <button onClick={this.props.CLICKED} className={classes.Button}>
          Memify
        </button>
        {copyText}
        <CopyText text={this.props.memedText} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text,
    memedText: state.memedText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CLICKED: () => {
      dispatch({ type: "CLICKED" });
    },
    CHANGED: e => {
      dispatch({ type: "CHANGED", event: e.target.value });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemePage);
