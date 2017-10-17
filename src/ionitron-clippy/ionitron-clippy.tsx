import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'ionitron-clippy',
  styleUrl: 'ionitron-clippy.scss',
  // shadow: true
})
export class MyName {
  @Prop() message: string;

  @State() screen: string = 'intro';
  @State() visible: boolean = true;

  changeScreen(event, screen, delay = false) {
    event.preventDefault();

    if (delay) {
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
        this.screen = screen;
      }, 3000);
    } else {
      this.screen = screen;
    }
  }

  getScreen() {
    if (this.screen === 'intro') {
      return [
        <p>Hi, I'm Ionitron. I'm the Ionic assistent and my job is to help you create great apps! Do you need assistance?</p>,
        <ul>
          <li onClick={ e => this.changeScreen(e, 'yes') }>Yes</li>
          <li onClick={ e => this.changeScreen(e, 'back', true) }>No, thanks!</li>
        </ul>,
        <br />,
        <span onClick={ e => this.changeScreen(e, 'hal9000') }><input type="checkbox" />Don't show this tip again</span>
      ];
    } else if (this.screen === 'hal9000') {
      return [
        <p>I'm sorry, I'm afraid I can't do that.</p>,
        <ul>
          <li onClick={ e => this.changeScreen(e, 'intro') }>oh</li>
        </ul>
      ];
    } else if (this.screen === 'yes') {
      return [
        <p>I don't know how to help. <a href="http://ionicframework.com/support">Maybe the humans can help.</a></p>,
        <ul>
          <li onClick={ e => this.changeScreen(e, 'intro', true) }>Thanks a lot!</li>
        </ul>
      ];
    } else if (this.screen === 'back') {
      return [
        <p>It looks like you're trying to work.</p>,
        <ul>
          <li onClick={ e => this.changeScreen(e, 'intro') }>Yup</li>
        </ul>
      ];
    }
  }

  render() {
    const style = { opacity: this.visible ? '1' : '0' };

    return (
      <div class="container" style={ style }>
        <div class="talk-bubble">
          <div class="talk-text">
            { this.getScreen() }
          </div>
        </div>
        <img src={ this.screen === 'hal9000' ? "./assets/halitron.png" : "./assets/ionitron.png" } class="ionitron" />
      </div>
    );
  }
}
