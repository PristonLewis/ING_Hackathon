import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string;
  public inputEl: string;
  public errorFlag: boolean;
  public validationType: string;

  constructor() { 
    this.title = 'problem2';
    this.inputEl = '';
    this.errorFlag = false;
    this.validationType = 'number'
  }

  // sets the error flag based on successful/unsuccessful login
  public check(): void {
    this.errorFlag = !this.validate();
  }

  // sets the validation type whenever the radio button gets clicked  
  public setValidationType(validationType: string): void {
    this.validationType = validationType;
    this.check()
  }

  // Validates the form based on the validation type i.e number, letter, password
  public validate(): boolean {
    if ((this.validationType) === 'number') {
      if (/[^0-9]/.test(this.inputEl)) return false;
    } else if((this.validationType) === 'letter'){
      if (/[^a-zA-Z]/.test(this.inputEl)) return false;
    } else {  
      // if (!(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{3,}.*?)(?=.*[!@#&*])/.test(this.inputEl))) return false;
      let exp: any = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#&*])/.exec(this.inputEl);
      if(exp) {
        if(!((/(?=(\d{3}))/g.test(this.inputEl)))) return true;
      }
      return false
    }
    
    return true;
  } 

}
