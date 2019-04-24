import { Component, State, h } from '@stencil/core';
import { validate } from '../../utils/pattern-validator';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @State() value = '';
  @State() isValid = true;

  private readonly pattern = "^[/\\p{L}\\p{N}\\p{Z}\\s\u0085\\p{Pd}\\p{Pi}\\p{Pf}\\p{Pc}\\p{Po}\\p{Sc}\\(\\)\\[\\]\"+']*$";

  handleChange = (event) => {
    this.value = event.target.value;
    this.isValid = validate(this.pattern, this.value);
  }

  render() {
    return (
      <div>
        <input type="text" onInput={this.handleChange} value={this.value} />
        <p>Valid: {this.isValid.toString()}</p>
      </div>
    )
  }
}
