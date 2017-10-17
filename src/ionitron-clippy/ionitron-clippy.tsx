import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ionitron-clippy',
  styleUrl: 'ionitron-clippy.scss'
})
export class MyName {
  @Prop() message: string;

  render() {
    return (
      <div class="ionitron-clippy-container">
        <div class="talk-bubble tri-right right-in">
          <div class="talktext">
            <p>CSS Talk Bubble configured by classes. Defaults to square shape, no triangle. Height is auto-adjusting to the height of the text.</p>
          </div>
        </div>
        <img src="./assets/ionitron.png" class="ionitron" />
      </div>
    );
  }
}
