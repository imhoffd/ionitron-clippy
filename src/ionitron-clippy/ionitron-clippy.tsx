import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ionitron-clippy',
  styleUrl: 'ionitron-clippy.scss',
  shadow: true
})
export class MyName {
  @Prop() message: string;

  render() {
    return (
      <div class="container">
        <div class="talk-bubble">
          <div class="talk-text">
            <p>Hi, I'm Ionitron. I'm the Ionic assistent and my job is to help you create great apps! Do you need assistance?</p>
          </div>
        </div>
        <img src="./assets/ionitron.png" class="ionitron" />
      </div>
    );
  }
}
