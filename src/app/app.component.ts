import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {

  this.exform = new FormGroup({
    'firstname' : new FormControl(null, Validators.required),
    'lastname' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    'address' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get firstname() {
    return this.exform.get('firstname');
  }
  get lastname() {
    return this.exform.get('lastname');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get address() {
    return this.exform.get('address');
  }

}