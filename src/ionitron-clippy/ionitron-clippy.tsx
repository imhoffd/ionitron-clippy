import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ionitron-clippy',
  styleUrl: 'ionitron-clippy.scss'
})
export class MyName {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        <img src="./assets/ionitron.png" class="ionitron" />
      </div>
    );
  }
}
