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
  error = '';
  classes = {'error-empty-filed': false };
  sendError = (element) => {
    console.log(element);
    this.error = 'some field empty or incorrect email';
    this.classes = {'error-empty-filed': true };
  }
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
    console.log(info);
    console.log(info.value);
    this.show = true;
  }
}

