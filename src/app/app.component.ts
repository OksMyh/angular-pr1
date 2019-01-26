import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true;
  login = false;
  register = true;
  onClickLogin = () => {
    this.show = false;
    this.login = true;
    this.register = false;
  }
  onClickRegistration = () => {
    this.show = false;
    this.login = false;
    this.register = true;
  }

  sendForm = (info) => {
    console.log(info.value);
    this.show = true;
  }

}

