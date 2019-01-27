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
  notFiled = (form) => {
    console.log(form);
    const requiredFiled = document.createElement('div');
    if (!this.show) {
      console.log(form.value);
      requiredFiled.innerText = `${form.value}*blank field fill out`;
      document.body.appendChild(requiredFiled);
      requiredFiled.style.color = 'red';
    } else {
      requiredFiled.style.display = 'none';
    }
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

