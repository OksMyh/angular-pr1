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
  classes = {'error-empty-filed': false};
  formObj = {
    name: '',
    email: '',
    pass: ''
  };
  sendError = () => {
    console.log(this.formObj);
    this.error = '';
    const  symbol = this.formObj.email.includes('@');
    for (const property in this.formObj) {
      if (this.formObj.hasOwnProperty(property) && (this.formObj[property] == false) || symbol == false ) {
        console.log(property);
        this.error += '*' + property + ` field empty or incorrect email `;
        this.classes = {'error-empty-filed': true};
      }
      // else if (symbol == false && this.formObj.pass == true && (this.formObj.name == true) ){
      //   this.error += '*email'  + ` field empty or incorrect email`;
      // }
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

