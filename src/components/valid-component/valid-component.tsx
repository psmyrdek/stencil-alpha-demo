import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'valid-component'
})
export class ValidComponent {

  @State() value = '';

  handleChange = (event) => {
    this.value = event.target.value;
  }

  render() {
    return (
      <div style={ { border: '1px solid green', padding: '10px' } }>
        <p>Not using external dep - can be rendered in IE11</p>
        <input type="text" onInput={this.handleChange} value={this.value} />
      </div>
    )
  }
}
