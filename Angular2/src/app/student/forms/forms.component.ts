import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})

export class FormsComponent implements OnInit {

  loginform:any= FormGroup;
  ngOnInit(): void {
    this.loginform = this.fb.group({
      fname: [''],
      lname: [''],
      email: [''],
    });
  }

  constructor(private fb: FormBuilder) {}

  datasubmit() {
    console.log(this.loginform.value);
  }
}
