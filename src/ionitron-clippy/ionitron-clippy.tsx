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
        <img src="http://ionic-io-assets.s3.amazonaws.com/ionitron-avatar.png" class="ionitron" />
      </div>
    );
  }
}
