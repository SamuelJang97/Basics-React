const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '서울',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      this.setState({
        result : '정답',
        word: value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    };
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

render() {
  return (
    <>
      <div>{this.state.word}</div>
      <form onSubmit={this.onSubmitForm}>
        <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
        <button>입력</button>
      </form>
      <div>{this.state.result}</div>
    </>
    )

  }
}

module.exports = WordRelay;